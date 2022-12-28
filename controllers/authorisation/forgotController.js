const nodemailer = require('nodemailer');
const User = require('../models/User');

exports.Forgot =  async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });

    // If the user was not found, return a 404 status code with a message
    if (!user) return res.status(404).send('User not found');

    // Generate a reset password token
    const resetPasswordToken = user.generateResetPasswordToken();

    // Save the reset password token and expiry date to the user
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send the reset password email
    const mailOptions = {
      from: '"Mock Test Marketplace" <noreply@mocktestmarketplace.com>',
      to: user.email,
      subject: 'Reset Password',
      text: `To reset your password, follow this link: http://localhost:3000/reset-password/${resetPasswordToken}`,
    };
    await transporter.sendMail(mailOptions);

    // Return a success message
    res.send('Reset password email sent');
  } catch (err) {
    // If there is an error, return a 500 status code with the error message
    res.status(500).send(err.message);
  }
};

