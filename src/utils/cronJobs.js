const cron = require("node-cron");
const prisma = require("../database/db");
const sendEmail = require("./sendEmail");

function startCronJobs() {
    cron.schedule("30 23 * * *", async () => {
      
      const now = new Date();
      const lastMonthSameDay = new Date(now);
      lastMonthSameDay.setMonth(now.getMonth() - 1);
  
      if (lastMonthSameDay.getMonth() === now.getMonth()) {
        lastMonthSameDay.setDate(0);
      }
  
      const outpasses = await prisma.outpass.findMany({
        where: {
          to: {
            lte: now,
          },
          student: {
            out: true,
          },
          createdAt: {
            gt: lastMonthSameDay,
          },
        },
        select: {
          student: {
            select: {
              id: true, 
              name: true,
              phone: true,
              email: true,
              room: {
                select: {
                  name: true,
                },
              },
            },
          },
          caretaker: {
            select: {
              email: true,
            },
          },
        },
      });
  
      // Group by caretaker email and deduplicate students
      let caretakerGroups = {};
      
      outpasses.forEach((op) => {
        const caretakerEmail = op.caretaker.email;
        const studentData = op.student;
        
        if (!caretakerGroups[caretakerEmail]) {
          caretakerGroups[caretakerEmail] = new Map(); // Use Map to deduplicate by student ID
        }
        
        // Use student ID as key to prevent duplicates
        caretakerGroups[caretakerEmail].set(studentData.id, studentData);
      });
  
      // Send emails to each caretaker
      for (const caretakerEmail in caretakerGroups) {
        const uniqueStudents = Array.from(caretakerGroups[caretakerEmail].values());
        
        const html = generateEmailHTML("Hostel Block", uniqueStudents);
        sendEmail({
          to: caretakerEmail,
          subject: `Students Exceeding IN Time - ${uniqueStudents.length} Student(s)`,
          text: `${uniqueStudents.length} students have exceeded their IN time.`,
          html: html,
        });
      }
    });
  }
  
  function generateEmailHTML(hostelName, students) {
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Students Exceeding IN Time</title>
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              
              body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  background-color: #f8fafc;
                  padding: 20px;
              }
              
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background: white;
                  border-radius: 12px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                  overflow: hidden;
              }
              
              .header {
                  background: #dc2626;
                  color: white;
                  padding: 24px;
                  text-align: center;
              }
              
              .header h1 {
                  font-size: 24px;
                  font-weight: 600;
                  margin-bottom: 8px;
              }
              
              .header .timestamp {
                  opacity: 0.9;
                  font-size: 14px;
              }
              
              .content {
                  padding: 24px;
              }
              
              .alert-box {
                  background: #fef2f2;
                  border: 1px solid #fecaca;
                  border-radius: 8px;
                  padding: 16px;
                  margin-bottom: 24px;
              }
              
              .alert-box h2 {
                  color: #dc2626;
                  font-size: 18px;
                  margin-bottom: 8px;
              }
              
              .stats {
                  background: #1f2937;
                  color: white;
                  padding: 12px 20px;
                  border-radius: 6px;
                  text-align: center;
                  margin-bottom: 24px;
                  font-weight: 500;
              }
              
              .student-list {
                  border: 1px solid #e5e7eb;
                  border-radius: 8px;
                  overflow: hidden;
              }
              
              .student-item {
                  padding: 16px;
                  border-bottom: 1px solid #e5e7eb;
                  transition: background-color 0.2s;
              }
              
              .student-item:last-child {
                  border-bottom: none;
              }
              
              .student-item:hover {
                  background-color: #f9fafb;
              }
              
              .student-name {
                  font-weight: 600;
                  font-size: 16px;
                  color: #1f2937;
                  margin-bottom: 4px;
              }
              
              .student-details {
                  display: grid;
                  gap: 4px;
                  font-size: 14px;
                  color: #6b7280;
              }
              
              .room-badge {
                  display: inline-block;
                  background: #dbeafe;
                  color: #1e40af;
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-size: 12px;
                  font-weight: 500;
                  margin-top: 4px;
              }
              
              .footer {
                  background: #f9fafb;
                  padding: 16px 24px;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                  border-top: 1px solid #e5e7eb;
              }
              
              .action-note {
                  background: #fff7ed;
                  border: 1px solid #fed7aa;
                  border-radius: 8px;
                  padding: 16px;
                  margin-top: 24px;
              }
              
              .action-note h3 {
                  color: #ea580c;
                  font-size: 16px;
                  margin-bottom: 8px;
              }
              
              .action-note p {
                  color: #9a3412;
                  font-size: 14px;
              }
              
              @media (max-width: 480px) {
                  body {
                      padding: 10px;
                  }
                  .content {
                      padding: 16px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>⚠️ Student IN Time Alert</h1>
                  <div class="timestamp">${currentDate} • ${currentTime}</div>
              </div>
              
              <div class="content">
                  <div class="alert-box">
                      <h2>${hostelName}</h2>
                      <p>The following students have exceeded their designated IN time and require immediate attention.</p>
                  </div>
                  
                  <div class="stats">
                      ${students.length} Student${students.length !== 1 ? 's' : ''} Requiring Attention
                  </div>
                  
                  <div class="student-list">
                      ${students.map(student => `
                          <div class="student-item">
                              <div class="student-name">${student.name}</div>
                              <div class="student-details">
                                  <div>📧 ${student.email}</div>
                                  <div>📱 ${student.phone}</div>
                              </div>
                              <span class="room-badge">🏠 ${student.room.name}</span>
                          </div>
                      `).join('')}
                  </div>
                  
                  <div class="action-note">
                      <h3>🚨 Immediate Action Required</h3>
                      <p>Please contact these students immediately to ensure their safety and well-being. If you cannot reach them, please follow the hostel's emergency protocols.</p>
                  </div>
              </div>
              
              <div class="footer">
                  <p>This is an automated notification from the Hostel Management System</p>
                  <p>Generated on ${currentDate} at ${currentTime}</p>
              </div>
          </div>
      </body>
      </html>
    `;
  }

module.exports = startCronJobs;
