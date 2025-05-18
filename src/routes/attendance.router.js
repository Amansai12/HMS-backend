const express = require("express");
const {
  giveAttendance,
  getAttendances,
} = require("../controllers/attendance.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");
const prisma = require("../database/db");

const router = express.Router();

router.post("/", verifyToken, giveAttendance);
router.get("/", verifyToken, getAttendances);

router.get("/export/:format", async (req, res) => {
    const format = req.params.format.toLowerCase();
    console.log(format);
    if (format !== "csv" && format !== "pdf") {
      return res
        .status(400)
        .json({ message: "Format must be either csv or pdf" });
    }
  
    try {
      const students = await prisma.student.findMany();
  
      if (format === "csv") {
        // Generate CSV
        const fields = [
          "name",
          "collegeId",
          "email",
          "phone",
          "address",
          "image",
          "roomId",
          "out",
          "outType",
        ];
  
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(students);
  
        res.header("Content-Type", "text/csv");
        res.attachment("students.csv");
        return res.send(csv);
      } else if (format === "pdf") {
        // Generate PDF
        const doc = new PDFDocument({
          margin: 30,
          size: 'A4',
          layout: 'landscape'
        });
  
        // Set response headers for PDF
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=students.pdf");
  
        // Pipe the PDF document to the response
        doc.pipe(res);
  
        // Add title and company information
        doc.fontSize(18).font('Helvetica-Bold').text("Student Data Report", { align: "center" });
        doc.fontSize(10).font('Helvetica').text(`Generated on: ${new Date().toLocaleDateString()}`, { align: "center" });
        doc.moveDown(2);
  
        // Selected fields for the report (excluding image to save space)
        const fields = [
          "name",
          "collegeId",
          "email",
          "phone",
          "address",
          "roomId",
          "out",
          "outType",
        ];
  
        // Calculate column width based on page size - allow wrapping for longer content
        const pageWidth = doc.page.width - 60; // Account for margins
        const columnWidth = pageWidth / fields.length;
        
        // Table headers
        let y = doc.y;
        let x = 30;
        
        // Draw header background
        doc.fillColor('#f0f0f0')
           .rect(x, y, pageWidth, 20)
           .fill();
           
        // Draw headers text
        doc.fillColor('#000000').font('Helvetica-Bold');
        
        fields.forEach((field) => {
          const displayName = field.charAt(0).toUpperCase() + field.slice(1);
          doc.fontSize(10).text(
            displayName,
            x,
            y + 5,
            { 
              width: columnWidth,
              align: 'center'
            }
          );
          x += columnWidth;
        });
  
        // Move to start of data rows
        y += 25;
        doc.font('Helvetica');
  
        // Draw data rows with alternating background
        students.forEach((student, index) => {
          // Alternate row background color
          if (index % 2 === 0) {
            doc.fillColor('#e9e9e9')
               .rect(30, y, pageWidth, 25)
               .fill();
          }
          
          doc.fillColor('#000000');
          x = 30;
  
          // Check if we need a new page based on vertical position
          if (y > doc.page.height - 50) {
            doc.addPage({
              margin: 30,
              size: 'A4',
              layout: 'landscape'
            });
            y = 30;
            
            // Redraw headers on new page
            x = 30;
            // Header background
            doc.fillColor('#f0f0f0')
               .rect(x, y, pageWidth, 20)
               .fill();
               
            // Header text
            doc.fillColor('#000000').font('Helvetica-Bold');
            fields.forEach((field) => {
              const displayName = field.charAt(0).toUpperCase() + field.slice(1);
              doc.fontSize(10).text(
                displayName,
                x,
                y + 5,
                { 
                  width: columnWidth,
                  align: 'center'
                }
              );
              x += columnWidth;
            });
            
            y += 25;
            doc.font('Helvetica');
          }
  
          // Draw each cell for this row
          fields.forEach((field) => {
            let value = student[field] !== null ? student[field].toString() : '';
            
            // Handle boolean values nicely
            if (field === 'out') {
              value = student[field] ? 'Yes' : 'No';
            }
            
            // Truncate very long values and add ellipsis
            if (value.length > 30) {
              value = value.substring(0, 27) + '...';
            }
            
            doc.fontSize(9).text(
              value,
              x,
              y + 5,
              { 
                width: columnWidth,
                align: 'center',
                ellipsis: true
              }
            );
            x += columnWidth;
          });
  
          y += 25;
        });
  
        // Add page numbers
        const pageCount = doc.bufferedPageRange().count;
        for (let i = 0; i < pageCount; i++) {
          doc.switchToPage(i);
          
          // Add footer with page numbers
          doc.fontSize(8)
             .text(
               `Page ${i + 1} of ${pageCount}`,
               30,
               doc.page.height - 30,
               { align: 'center' }
             );
        }
  
        // Finalize the PDF and end the stream
        doc.end();
        return;
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

module.exports = { attendanceRouter: router };
