const prisma = require("../database/db");

const getHostels = async (req, res) => {
    try {
        const hostels = await prisma.hostel.findMany({
            select:{
                name:true,
                id:true,
                rooms:{
                    select:{
                        name : true,
                        students:{
                            select:{
                                name:true,
                                email:true,
                                image:true,
                            }
                        }
                    }
                    
                }
            }
        });
        return res.status(200).json({
            message: "Hostels fetched successfully",
            hostels: hostels,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}
const addHostel = async (req, res) => {
    const { name,latitude,longitude } = req.body;
    try {
        const hostel = await prisma.hostel.create({
            data: {
                name,
                latitude : parseFloat(latitude),
                longitude : parseFloat(longitude)
            }
        })
        return res.status(201).json({
            message: "Hostel created successfully",
            hostel: hostel
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const getRooms = async (req,res) => {
    const {hostelId} = req.params;
    try {
        const rooms = await prisma.room.findMany({
            where:{
                hostelId
            }
        })
        return res.status(201).json({
            message: "Rooms fetched successfully",
            rooms
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
const addRoom = async (req,res) => {
    const {name,hostelId,capacity} = req.body;
    try {
        const room = await prisma.room.create({
            data:{
                name : name,
                hostelId : hostelId,
                quantity : Number(capacity)
            }
        })
        return res.status(201).json({
            message: "Room created successfully",
            room
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {getHostels,addHostel,addRoom,getRooms}