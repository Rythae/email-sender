const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", async (req, res) => {
  res.send("Welcome to Gmail API with NodeJS");
});


const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: "ik.ugwuanyi@gmail.com",
    pass: "AAF3AB7DEC1C8C1BB65391F67B95B8DED4F3",
  },
});

let mailOptions = {
  from: "ik.ugwuanyi@gmail.com",
  to: "auxano42@gmail.com",
  subject: "Test",
  text: "I am sending an email from nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message);
  }
  console.log("success");
});

