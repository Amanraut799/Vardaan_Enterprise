const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {

  const { name, email, subject, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({

      service: "gmail",

      
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: subject,

      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,

    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      success: false,
      message: "Failed To Send Message",
    });

  }

});

module.exports = router;