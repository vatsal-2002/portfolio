const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

const contactEmail = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: process.env.EMAIL_USER,
    to: "vatsprajapati20@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Failed to send message" });
    } else {
      const query = "INSERT INTO submissions (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)";
      db.query(query, [firstName, lastName, email, phone, message], (err, result) => {
        if (err) {
          res.json({ code: 500, status: "Failed to save submission" });
        } else {
          res.json({ code: 200, status: "Message Sent" });
        }
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
