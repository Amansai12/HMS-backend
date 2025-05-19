const prisma = require("../database/db");
const sendEmail = require("../utils/sendEmail");

function isWithinDistance(
    hostelLat,
    hostelLon,
    userLat, 
    userLon,
    maxDistance = 30 // meters (adjustable threshold)
  ) {
    const toRad = (value) => (value * Math.PI) / 180;
  
    const R = 6371000; // Earth's radius in meters
    const dLat = toRad(userLat - hostelLat);
    const dLon = toRad(userLon - hostelLon);
  
    const lat1 = toRad(hostelLat);
    const lat2 = toRad(userLat);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    return distance <= maxDistance;
  }
const giveAttendance = async (req, res) => {
  const { latitude, longitude } = req.body;
  try {
    const studentId = req.userId;
    const student = await prisma.student.findUnique({
      where: {
        id: studentId,
      },
      include: {
        room: {
          select: {
            hostel: {
              select: {
                id: true,
                latitude: true,
                longitude: true,
              },
            },
          },
        },
      },
    });

    if (!student) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    const HostelLatitude = student.room.hostel.latitude;
    const HostelLongitude = student.room.hostel.longitude;

    if (
      !isWithinDistance(HostelLatitude, HostelLongitude, latitude, longitude)
    ) {
      return res.status(400).json({
        message: "Attendance unavailable, you are far from your hostel",
      });
    }
    
    let attendance = await prisma.attendance.findFirst({
      where: {
        checkInAt: { equals: null },
        studentId,
      },
    });

  
    if (attendance) {
       
      await prisma.attendance.update({
        where: {
          id: attendance.id,
        },
        data: {
          checkInAt: new Date(),
        },
      });
 
    } else {
      
      attendance = await prisma.attendance.create({
        data: {
          studentId,
          checkOutAt: new Date(),
          type: "INCAMPUS",
          checkInAt: null,
        },
      });

    }

    return res.status(200).json({
      message: "Attendance given successfully",
      data : {
        latitude,
        longitude
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const giveOutpassAttendance = async (req, res) => {
  const { latitude, longitude } = req.body;
  try {
    const studentId = req.userId;
    const student = await prisma.student.findUnique({
      where: {
        id: studentId,
      },
      include: {
        room: {
          select: {
            hostel: {
              select: {
                id: true,
                latitude: true,
                longitude: true,
              },
            },
          },
        },
      },
    });

    if (!student) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    const HostelLatitude = student.room.hostel.latitude;
    const HostelLongitude = student.room.hostel.longitude;

    if (
      !isWithin2Meters(HostelLatitude, HostelLongitude, latitude, longitude)
    ) {
      return res.status(400).json({
        message: "Attendance unavailable, you are far from your hostel",
      });
    }
    const outpass = await prisma.outpass.findFirst({
      where: {
        studentId: student.id,
        status: "APPROVED",
      },
      select:{
        from:true,
        to:true,
        student:{
            select:{
                out : true
            }
        },
        type : true,
        id : true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const curr = new Date()
    if(!outpass || outpass.from > curr){
        return res.status(400).json({
            message : "No valid outpass"
        })
    }
    let attendance = await prisma.attendance.findFirst({
      where: {
        checkInAt: { equals: null },
        studentId,
        OR : [
            {type : 'LEAVE'},
            {type : 'OUTING'}
        ]
      },
    });

    if (attendance) {
       
      await prisma.attendance.update({
        where: {
          id: attendance.id,
        },
        data: {
          checkInAt: new Date(),
        },
      });
      await prisma.student.update({
        where: {
          id: studentId,
        },
        data: {
          out: false,
          outType : 'INCAMPUS'
        },
      });
    } else {
      
      attendance = await prisma.attendance.create({
        data: {
          studentId,
          checkOutAt: new Date(),
          type: outpass.type,
          checkInAt: null,
        },
      });
      await prisma.student.update({
        where: {
          id: studentId,
        },
        data: {
          out : true,
          outType: outpass.type,
        },
      });
    }

    return res.status(200).json({
      message: "Attendance given successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAttendances = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  let { fromDate, toDate, search, type } = req.query;

  try {
    const caretaker = await prisma.careTaker.findUnique({
      where: { id: req.userId },
    });

    if (!caretaker)
      return res.status(404).json({ message: "Caretaker not found" });

    if (!fromDate) {
      const now = new Date();
      fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else {
      // Ensure fromDate is a Date object
      fromDate = new Date(fromDate);
    }

    if (!toDate) {
      toDate = new Date();
    } else {
      // Ensure toDate is a Date object
      toDate = new Date(toDate);
    }

    if (!type) {
      type = "INCAMPUS";
    }

    console.log(fromDate);

    const searchTerm = search || "";

    // Modified where condition for date filtering
    const whereClause = {
      OR: [
        {
          student: {
            name: { contains: searchTerm, mode: "insensitive" },
          },
        },
        {
          student: {
            email: { contains: searchTerm, mode: "insensitive" },
          },
        },
        {
          student: {
            collegeId: { contains: searchTerm, mode: "insensitive" },
          },
        },
      ],
      type: type,
      student: {
        room: {
          hostelId: caretaker.hostelId,
        },
      },
      // Handle case where checkInAt might be null
      AND: [
        {
          OR: [{ checkInAt: { lte: toDate } }, { checkInAt: null }],
        },
        {
          OR: [{ checkOutAt: { gte: fromDate } }, { checkOutAt: null }],
        },
      ],
    };

    // Execute the query for paginated results
    const attendances1 = await prisma.attendance.findMany({
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
    const total = await prisma.attendance.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      attendances: [...attendances1],
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
module.exports = { giveAttendance, getAttendances, giveOutpassAttendance };
