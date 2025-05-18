const express = require('express');
const {userRouter} = require('./routes/userRouter.router.js');
const app = express();
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { hostelRouter } = require('./routes/hostelRouter.router.js');
const cookieParser = require('cookie-parser');
const { attendanceRouter } = require('./routes/attendance.router.js');
const dashboardRouter = require('./routes/dashboard.router.js');
const startCronJobs = require('./utils/cronJobs.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' })); 
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5174', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

app.get('/', (_req, res) => {
  res.send('Hello TypeScript with Node.js!');
});

app.use('/api/user',userRouter)
app.use('/api/hostel',hostelRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/dashboard', dashboardRouter)

startCronJobs()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});