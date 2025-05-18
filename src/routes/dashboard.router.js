const  { getDashboardData } = require('../controllers/dashboard.controller');

const express = require('express')

const router = express.Router();


router.get('/', getDashboardData);

module.exports = router;