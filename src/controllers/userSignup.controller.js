const prisma = require("../database/db");
const cloudinary = require("../utils/cloudinary");
const { generateAuthToken } = require("../utils/generateAuthToken");


const userSignup = async (req,res) => {
    const {email,name,studentId,address,phone,password,roomId} = req.body;
    
    try{
        const file = req.files.profileImage;
        if(!file){
            return res.status(400).json({
                message: "File not found"
            })
        }
        // if(file.size > 1024 * 1024){
        //     return res.status(400).json({
        //         message: "File size is too large"
        //     })
        // }
        const url = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "user",
        })
        const oldUser = await prisma.student.findUnique({
            where: {
                email: email
            }
        })
        if(oldUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const user = await prisma.student.create({
            data: {
                email,
                name,
                collegeId: studentId,
                address,
                phone,
                password,
                image : url.secure_url,
                roomId,
                out : false
            },
            include:{
                room : {
                    select:{
                        name: true,
                        hostel: {
                            select:{
                                name:true
                            }
                        }
                    }
                } 
            }
        })
        const token = generateAuthToken(user.id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 30 * 24 * 60 * 60 * 1000, 
        });
        return res.status(201).json({
            message: "User created successfully",
            user : {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                image: user.image,
                room : user.room,
                hostelId: user.room.hostelId,
            },
            token,
            type : "STUDENT"
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
const userUpdate = async (req,res) => {
    const {email,name,studentId,address,phone,password,roomId} = req.body;
    
    try{
        const file = req.files.profileImage;
        if(!file){
            return res.status(400).json({
                message: "File not found"
            })
        }
        // if(file.size > 1024 * 1024){
        //     return res.status(400).json({
        //         message: "File size is too large"
        //     })
        // }
        const url = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "user",
        })
        
        const user = await prisma.student.update({
            where:{
                email : email
            },
            data: {
                email,
                name,
                collegeId: studentId,
                address,
                phone,
                password,
                image : url.secure_url,
                roomId
            },
            include:{
                room : {
                    select:{
                        name: true,
                        hostel: {
                            select:{
                                name:true
                            }
                        }
                    }
                } 
            }
        })
        return res.status(201).json({
            message: "User updated successfully",
            user : {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                image: user.image,
                room : user.room,
                hostelId: user.room.hostelId,
            },
            token
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const userLogin = async (req,res) => {
    const {email,password} = req.body;
    try{
        const user = await prisma.student.findUnique({
            where: {
                email: email
            },
            include:{
                room : {
                    select:{
                        name: true,
                        hostel: {
                            select:{
                                name:true
                            }
                        }
                    }
                } 
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
            maxAge: 30 * 24 * 60 * 60 * 1000, 
        });
        return res.status(200).json({
            message: "User logged in successfully",
            user : {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                image: user.image,
                room : user.room,
                hostelId: user.room.hostelId,
                hostelName : user.room.hostel.name
            },
            token,
            type : 'STUDENT'
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const getUser = async (req,res) => {
    const id = req.userId;
  
    try{
        const user = await prisma.student.findUnique({
            where:{id},
            select:{
                name:true,
                email:true,
                image:true,
                address:true,
                phone:true,
                room:{
                    select:{
                        name:true,
                        hostel:{
                            select:{
                                name:true
                            }
                        }
                    }
                }
            }
        })
        
        return res.status(200).json({
            user
        })
    }catch(err){
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}
const getAdmin = async (req,res) => {
    const id = req.userId;
   
    try{
        const user = await prisma.careTaker.findUnique({
            where:{id},
            select:{
                name:true,
                email:true,
                image:true,
                phone:true,
                hostel : true
            }
        })
        
        return res.status(200).json({
            user
        })
    }catch(err){
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}

const requestOutPass = async (req,res) => {
    const {studentId,fromDate,toDate,purpose,type} = req.body;
    
    try{
        const file = req.files.letter;
        if(!file){
            return res.status(400).json({
                message: "File not found"
            })
        }
        const id = req.userId
        // if(file.size > 1024 * 1024){
        //     return res.status(400).json({
        //         message: "File size is too large"
        //     })
        // }
        const url = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "user",
        })
        
        const outpass = await prisma.outpass.create({
            data:{
                studentId : id,
                from : new Date(fromDate),
                to : new Date(toDate),
                purpose,
                letter : url.secure_url,
                type
            }
        })
        
        return res.status(201).json({
            message: "Outpass requested successfully",
            outpass
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
const getOutPass = async (req,res) => {
    
    try{
       
        const id = req.userId
      
        const outpasses = await prisma.outpass.findMany({
            where : {
                studentId : id
            },
            orderBy : {
                createdAt : "desc"
            },
            include : {
                caretaker : true,
                student : true
            },
            take : 10
        })
        
        return res.status(201).json({
            message: "Outpasses fetched successfully",
            outpasses
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}



module.exports = { userSignup , userLogin, getUser,userUpdate,requestOutPass, getOutPass, getAdmin}