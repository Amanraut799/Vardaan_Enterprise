const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);


router.get("/smtp-test", async (req, res) => {
  try {
    await transporter.verify();

    res.json({
      success: true,
      message: "SMTP connected",
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
      code: err.code,
    });
  }
});

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const adminTemplate =  `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <style>
          body{
            margin:0;
            padding:0;
            background:#f4f6f9;
            font-family:Arial,sans-serif;
          }

          .container{
            max-width:650px;
            margin:30px auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 5px 20px rgba(0,0,0,0.08);
          }

          .header{
            background:#071c3c;
            padding:30px;
            text-align:center;
          }

          .header h1{
            color:#d4a017;
            margin:0;
            font-size:28px;
          }

          .header p{
            color:#ffffff;
            margin-top:8px;
            font-size:14px;
          }

          .content{
            padding:35px;
          }

          .title{
            font-size:22px;
            color:#071c3c;
            margin-bottom:25px;
            border-left:4px solid #d4a017;
            padding-left:12px;
          }

          .field{
            margin-bottom:18px;
          }

          .label{
            font-weight:bold;
            color:#071c3c;
            display:block;
            margin-bottom:5px;
          }

          .value{
            color:#555;
            line-height:1.7;
            background:#f8fafc;
            padding:12px;
            border-radius:8px;
          }

          .message-box{
            background:#f8fafc;
            padding:18px;
            border-radius:8px;
            line-height:1.8;
            color:#444;
          }

          .footer{
            background:#071c3c;
            padding:20px;
            text-align:center;
            color:#ffffff;
            font-size:13px;
          }

          .footer span{
            color:#d4a017;
            font-weight:bold;
          }
        </style>
        </head>

        <body>

        <div class="container">

          <div class="header">
            <h1>Vardaan Enterprises</h1>
            <p>New Contact Form Submission</p>
          </div>

          <div class="content">

            <div class="title">
              Contact Request Details
            </div>

            <div class="field">
              <span class="label">Name</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email</span>
              <div class="value">${email}</div>
            </div>

            <div class="field">
              <span class="label">Subject</span>
              <div class="value">${subject}</div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">
                ${message}
              </div>
            </div>

          </div>

          <div class="footer">
            © ${new Date().getFullYear()} <span>Vardaan Enterprises</span><br>
            This message was submitted through your website contact form.
          </div>

        </div>

        </body>
        </html>
        `;

    const customerTemplate = ` 
     <!DOCTYPE html> 
      <html>
       <head>
        <meta charset="UTF-8" />
         <style> 
          body{ 
          margin:0;
          padding:0; 
          background:#f4f6f9;
          font-family:Arial,sans-serif;
          } 
          
          .container{
          max-width:650px;
          margin:30px auto;
          background:#ffffff;
          border-radius:14px;
          overflow:hidden; 
          box-shadow:0 5px 20px rgba(0,0,0,0.08);
          } 

          .header{
          background:#071c3c;
          padding:35px;
          text-align:center;
          } 

          .logo{
          width:120px;
          margin-bottom:15px; 
          } 
                    
          .header h1{
          color:#ffffff;
          margin:0;
          font-size:28px;
          }

          .header p{
          color:#d4a017;
          margin-top:8px; 
          } 

          .content{ padding:40px;
          }

          .content h2{ 
          color:#071c3c; 
          margin-bottom:20px;
          } 

          .content p{ 
          color:#555; 
          line-height:1.8; 
          font-size:15px; 
          } 

          .highlight-box{ 
          background:#f8fafc; 
          border-left:4px solid #d4a017; 
          padding:18px; 
          margin:25px 0; 
          border-radius:8px;
          } 

          .btn{ 
          display:inline-block; 
          padding:14px 28px; 
          background:#d4a017; 
          color:#ffffff !important; 
          text-decoration:none; 
          border-radius:50px; 
          margin-top:15px; 
          font-weight:bold; 
          }

          .footer{ 
          background:#071c3c; 
          text-align:center; 
          padding:25px; 
          color:#ffffff; 
          font-size:13px; 
          }

          .footer a{ 
          color:#d4a017; 
          text-decoration:none; 
          }
          </style>
            </head>
            <body> 
            <div class="container"> 
              <div class="header"> 
              <img src="https://vardaan-enterprise.onrender.com/favicon.png" alt="Vardaan Enterprises" class="logo" /> 
              <h1>Vardaan Enterprises</h1> 
                <p>Integrity Driven Recovery Solutions</p> 
              </div> 
              <div class="content"> 
                <h2>Hello ${name},</h2>
                <p> Thank you for contacting <strong>Vardaan Enterprises</strong>. We appreciate your interest in our services. </p> 
                
                <div class="highlight-box"> Your message has been received successfully and our team will review it shortly. </div> 
                
                <p> We strive to respond to all inquiries as quickly as possible. One of our representatives will contact you soon. </p> 
                <p> We look forward to assisting you. </p> 
                <p> Regards,<br> <strong>Vardaan Enterprises</strong> </p> 
            </div> 
            <div class="footer"> © ${new Date().getFullYear()} Vardaan Enterprises<br><br> Email: vardaanenterprises06@gmail.com </div> 
            </div> 
        </body> 
      </html> `;

    const adminResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "theswift321@gmail.com",
      replyTo: email,
      subject,
      html: adminTemplate,
    });
    
    console.log("asd");
    console.log("Admin email:", adminResult);

    const customerResult = await resend.emails.send({
      from: "theswift321@gmail.com",
      to: email,
      subject: "Thank You For Contacting Vardaan Enterprises",
      html: customerTemplate,
    });

    console.log("Customer email:", customerResult);

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;