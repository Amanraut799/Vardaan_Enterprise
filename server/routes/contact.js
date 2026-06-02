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
      subject: `New Website Inquiry | ${subject}`,

      html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: auto;
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        overflow: hidden;
      ">

        <div style="
          background:#071c3c;
          color:white;
          padding:20px;
          text-align:center;
        ">
          <h2 style="margin:0;">Vardaan Enterprises</h2>
          <p style="margin:5px 0 0;">
            New Contact Form Submission
          </p>
        </div>

        <div style="padding:25px;">

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px;"><strong>Name</strong></td>
              <td style="padding:10px;">${name}</td>
            </tr>

            <tr style="background:#f8fafc;">
              <td style="padding:10px;"><strong>Email</strong></td>
              <td style="padding:10px;">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px;"><strong>Subject</strong></td>
              <td style="padding:10px;">${subject}</td>
            </tr>

            <tr style="background:#f8fafc;">
              <td style="padding:10px;"><strong>Date</strong></td>
              <td style="padding:10px;">
                ${new Date().toLocaleString()}
              </td>
            </tr>
          </table>

          <div style="
            margin-top:20px;
            padding:15px;
            background:#f8fafc;
            border-left:4px solid #d4a017;
          ">
            <strong>Message</strong>
            <p style="margin-top:10px;">
              ${message}
            </p>
          </div>

        </div>

        <div style="
          background:#f1f5f9;
          text-align:center;
          padding:15px;
          font-size:12px;
          color:#64748b;
        ">
          Sent from Vardaan Enterprises Website
        </div>

      </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed To Send Message",
    });

  }

});

module.exports = router;