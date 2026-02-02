import express from 'express';
import Contact from '../model/dbModel.js';
import nodemailer from 'nodemailer';





const contactUsController = async (req, res) => {
    const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.eMAIL_USER, 
    pass: process.env.pASSWORD 
  }
})
  try {
    console.log("CHECKING ENV:", process.env.eMAIL_USER, process.env.pASSWORD);
    const { name, email, phone } = req.body;

    const newContact = await Contact.create({ name, email, phone });


    const mailOptions = {
      from: process.env.eMAIL_USER, 
      to: process.env.eMAIL_USER,  
      replyTo: email, 
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`
    };

    
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Contact saved and email sent!",
      data: newContact
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
}

export { contactUsController };