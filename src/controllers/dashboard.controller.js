
const { parseISO, subDays, format, startOfDay } = require('date-fns');
const prisma = require('../database/db');


/**
 * Dashboard controller to handle dashboard data requests
 */
 const getDashboardData = async (req, res) => {
  try {
    
    const thirtyDaysAgo = subDays(new Date(), 30);
    const sevenDaysAgo = subDays(new Date(), 7);
    
    
    const [
      attendanceTrends,
      hostelOccupancy,
      outpassStatistics,
      currentAttendanceDistribution,
      studentsStats
    ] = await Promise.all([
      getAttendanceTrends(thirtyDaysAgo),
      getHostelOccupancy(),
      getOutpassStatistics(sevenDaysAgo),
      getCurrentAttendanceDistribution(),
      getStudentsStats()
    ]);

    res.status(200).json({
      attendanceTrends,
      hostelOccupancy,
      outpassStatistics,
      currentAttendanceDistribution,
      studentsStats
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Failed to retrieve dashboard data' });
  }
};


async function getAttendanceTrends(startDate) {
  // Generate all dates for the last 30 days
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), i);
    return format(date, 'yyyy-MM-dd');
  }).reverse();

  // Get all attendance records for the last 30 days
  const attendanceRecords = await prisma.outpass.findMany({
    where: {
      from: {
        gte: startDate
      },
      status : 'APPROVED',
      student:{
        out : true
      }
    },
    include: {
      student: true
    }
  });

  const students = await prisma.student.count()


  // Group attendance by date and type
  const groupedByDate = dates.map(date => {
    const dayRecords = attendanceRecords.filter(record => 
      format(record.from, 'yyyy-MM-dd') === date
    );
    
    //const inCampus = dayRecords.filter(record => record.type === 'INCAMPUS').length;
    const outing = dayRecords.filter(record => record.type === 'OUTING').length;
    const leave = dayRecords.filter(record => record.type === 'LEAVE').length;
    
    return {
      date,
      inCampus : students - outing - leave,
      outing,
      leave
    };
  });

  return groupedByDate;
}


async function getHostelOccupancy() {
  const hostels = await prisma.hostel.findMany({
    include: {
      rooms: {
        include: {
          _count: {
            select: {
              students: true
            }
          }
        }
      }
    }
  });

  return hostels.map(hostel => {
    const totalRooms = hostel.rooms.length;
    const occupiedRooms = hostel.rooms.filter(room => 
      room._count.students > 0
    ).length;
    
    return {
      hostelName: hostel.name,
      totalRooms,
      occupiedRooms
    };
  });
}

async function getOutpassStatistics(startDate) {
  // Generate all dates for the last 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), i);
    return format(date, 'yyyy-MM-dd');
  }).reverse();

  // Get all outpasses for the last 7 days
  const outpasses = await prisma.outpass.findMany({
    where: {
      createdAt: {
        gte: startDate
      }
    }
  });

  // Group outpasses by date
  return dates.map(date => {
    const count = outpasses.filter(outpass => 
      format(outpass.createdAt, 'yyyy-MM-dd') === date
    ).length;
    
    return {
      day: format(parseISO(date), 'MMM dd'),
      count
    };
  });
}


async function getCurrentAttendanceDistribution() {
  
  const students = await prisma.student.findMany();
  
  const inCampus = students.filter(student => !student.out && student.outType === 'INCAMPUS').length;
  const outing = students.filter(student => student.out && student.outType === 'OUTING').length;
  const leave = students.filter(student => student.out && student.outType === 'LEAVE').length;
  
  return {
    inCampus,
    outing,
    leave
  };
}

async function getStudentsStats(){
    try{
        const students = await prisma.student.count({
            where:{
                OR : [
                    {outType : 'LEAVE'},
                    {outType : 'OUTING'}
                ]
            }
        })
        const leave = students.filter((s) => s.outType === 'LEAVE')
        return {
            leave,
            outing : students.length - leave,
        }
    }catch(err){

    }
}
// async function getCriticalPointsDistribution() {
//   const students = await prisma.student.findMany({
//     select: {
//       criticalPoints: true
//     }
//   });
  
//   // Group students by critical points ranges
//   const ranges = [
//     { range: '0 points', count: 0 },
//     { range: '1-3 points', count: 0 },
//     { range: '4-6 points', count: 0 },
//     { range: '7+ points', count: 0 }
//   ];
  
//   students.forEach(student => {
//     const points = student.criticalPoints;
    
//     if (points === 0) {
//       ranges[0].count++;
//     } else if (points >= 1 && points <= 3) {
//       ranges[1].count++;
//     } else if (points >= 4 && points <= 6) {
//       ranges[2].count++;
//     } else {
//       ranges[3].count++;
//     }
//   });
  
//   return ranges;
// }

module.exports = {
  getDashboardData
};