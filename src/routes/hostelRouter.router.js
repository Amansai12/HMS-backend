const express = require('express');
const userSignup = require('../controllers/userSignup.controller');
const { addHostel, getHostels, addRoom, getRooms } = require('../controllers/hostel.controller');
const sendEmail = require('../utils/sendEmail');


const router = express.Router();

router.post('/', addHostel);
router.get('/',getHostels)
router.post('/room', addRoom);
router.get('/room/:hostelId',getRooms)
router.get('/send',async (req,res) => {
    sendEmail({
        to: 'rs200329@rguktsklm.ac.in',
        subject: 'Welcome!',
        text: 'Welcome to our app.',
        html: '<b>Welcome to our app</b>',
      });
    return res.json({
        message : "Done"
    })
})

module.exports = {hostelRouter : router}