const prisma = require("../database/db");
const cloudinary = require("../utils/cloudinary");
const { generateAuthToken } = require("../utils/generateAuthToken");

const addCareTaker = async (req, res) => {
  const { name, email, phone, hostelId,role } = req.body;
  try {
    const file = req.files.profileImage;
    if (!file) {
      return res.status(400).json({
        message: "File not found",
      });
    }
    // if(file.size > 1024 * 1024){
    //     return res.status(400).json({
    //         message: "File size is too large"
    //     })
    // }
    const url = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "user",
    });
    const olduser = await prisma.careTaker.findUnique({
      where: {
        email,
      },
    });
    if (olduser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await prisma.careTaker.create({
      data: {
        name,
        email,
        phone,
        hostelId,
        password: email,
        image : url.secure_url,
        role
      },
    });
    return res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getStudents = async (req, res) => {
  const limit = 10;
  let { page, search } = req.query;
  page = Number(page) || 1;

  // Base where condition
  let whereCondition = {};

  let searchTerm = search;

  if (search) {
    whereCondition.OR = [
      { name: { contains: searchTerm, mode: "insensitive" } },
      { email: { contains: searchTerm, mode: "insensitive" } },
      { collegeId: { contains: searchTerm, mode: "insensitive" } },
      {
        room: {
          is: {
            OR: [
              { name: { contains: searchTerm, mode: "insensitive" } },
              {
                hostel: {
                  is: {
                    name: { contains: searchTerm, mode: "insensitive" },
                  },
                },
              },
            ],
          },
        },
      },
    ];
  }

  console.log("Search:", search);
  console.log("Type:", typeof search);
  console.log(req.query);

  try {
    const students = await prisma.student.findMany({
      where: whereCondition,
      include: {
        room: {
          select: {
            name: true,
            hostel: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalStudents = await prisma.student.count({
      where: whereCondition,
    });

    const totalPages = Math.ceil(totalStudents / limit);

    if (page > totalPages && totalStudents !== 0) {
      return res
        .status(404)
        .json({ message: "No students found on this page" });
    }

    const prevPage = page > 1 ? page - 1 : null;
    const nextPage = page < totalPages ? page + 1 : null;

    return res.status(200).json({
      message: "Students fetched successfully",
      students,
      pagination: {
        totalStudents,
        totalPages,
        currentPage: page,
        prevPage,
        nextPage,
      },
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const careTakerLogin = async (req,res) => {
  const {email,password} = req.body;
  try{
      const user = await prisma.careTaker.findUnique({
          where: {
              email: email
          },
          include:{
              hostel:true
          }
      })
      if(!user){
          return res.status(400).json({
              message: "User not found"
          })
      }
      if(user.password !== password){
          return res.status(400).json({
              message: "Invalid credentials"
          })
      }
      const token = generateAuthToken(user.id);
      res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          maxAge: 24 * 60 * 60 * 1000, 
      });
      await prisma.hostel.update({
        where:{
          id : user.hostelId
        },
        data : {
          currentCaretakerId : user.id
        }
      })
      return res.status(200).json({
          message: "User logged in successfully",
          user : {
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              image: user.image,
              hostel: user.hostel
          },
          token,
          type : user.role
      })
  }catch(err){
      console.log(err)
      return res.status(500).json({
          message: "Internal server error"
      })
  }
}

const giveOutpass = async (req,res) => {
    const {outpassId,decision} = req.body;
    try{
      const caretakerId = req.userId;
      const caretaker = await prisma.careTaker.findUnique({
        where:{id : caretakerId}
      })
      if(!caretaker){
        return res.status(401).json({
          message : "Unauthorized access"
        })
      }
      
      if(decision == 'APPROVED'){
        await prisma.outpass.update({
          where:{
            id : outpassId
          },
          data : {
            status : 'APPROVED',
            caretakerId : req.userId
          }
        })
      }else{
        await prisma.outpass.update({
          where:{
            id : outpassId
          },
          data : {
            status : 'REJECTED',
            caretakerId : req.userId
          }
        })
      }

      return res.status(200).json({
        message : "outpass updates successfully"
      })


    }catch(err){
      return res.status(500).json({
        message : "Something went wrong"
      })
    }
}

const getAdminOutpasses = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  let { fromDate, toDate, search, type } = req.query;

  try {
    const caretaker = await prisma.careTaker.findUnique({
      where: { id: req.userId },
    });

    if (!caretaker) return res.status(404).json({ message: "Caretaker not found" });
   
    if (!fromDate) {
      const now = new Date()
      fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else {
      // Ensure fromDate is a Date object
      fromDate = new Date(fromDate);
    }
    
    if(!toDate){
      toDate = new Date()
    } else {
      // Ensure toDate is a Date object
      toDate = new Date(toDate);
    }

    
    if (!type) {
      type = 'PENDING'
    }

    const searchTerm = search || "";
    
    // Modified where condition for date filtering
    const whereClause = {
      AND: [
        {
          OR: [
            {
              student: {
                name: { contains: searchTerm, mode: 'insensitive' }
              }
            },
            {
              student: {
                email: { contains: searchTerm, mode: 'insensitive' }
              }
            },
            {
              student: {
                collegeId: { contains: searchTerm, mode: 'insensitive' }
              }
            }
          ]
        },
        {
          student: {
            room: {
              hostelId: caretaker.hostelId
            }
          }
        },
        {
          createdAt: { gte: fromDate }
        },
        {
          createdAt: { lte: toDate }
        }
      ],
      status : type
    };
    
    // Execute the query for paginated results
    const attendances1 = await prisma.outpass.findMany({
      where: whereClause,
      include: {
        student: {
          select: {
            name: true,
            email: true,
            collegeId: true,
            image: true,
            room: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    
    // Count total records for pagination
    const total = await prisma.outpass.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      outpasses: [...attendances1],
      pagination: {
        total,
        totalPages,
        currentPage: page,
        prevPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
      },
    });
  } catch (error) {
    console.error("Error fetching attendances:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addCareTaker,
  getStudents,
  careTakerLogin,
  giveOutpass,
  getAdminOutpasses
};
