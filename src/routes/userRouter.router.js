const express = require('express');
const {userSignup,userLogin, getUser, userUpdate, requestOutPass, getOutPass, getAdmin} = require('../controllers/userSignup.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const { addCareTaker, getStudents, careTakerLogin, giveOutpass, getAdminOutpasses } = require('../controllers/careTaker.controller');


const router = express.Router();

router.post('/student-signup', userSignup);
router.post('/student-login', userLogin);
router.post('/caretaker-login', careTakerLogin);
router.post('/caretaker-signup', addCareTaker);
router.post('/student-update',verifyToken,userUpdate)
router.get('/student', getStudents )
router.get('/',verifyToken,getUser)
router.get('/caretaker',verifyToken,getAdmin)
router.get('/logout', (req,res) => {
    res.clearCookie('token');
    return res.status(200).json({
        message: "User logged out successfully"
    })
})
router.post('/outpass',verifyToken,requestOutPass)
router.get('/outpass',verifyToken,getOutPass)
router.post('/grant-outpass',verifyToken,giveOutpass)
router.get('/grant-outpass',verifyToken,getAdminOutpasses)

module.exports = {userRouter : router}