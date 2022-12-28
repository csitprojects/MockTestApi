
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//import passport from 'passport';
import connectDB from './config/database';
import authRoutes from './routes/authRoutes';
import teacherRoutes from './routes/teacherRoutes';
import examRoutes from './routes/examRoutes';
import paymentRoutes from './routes/paymentRoutes';


const app = express();

// Connect to the database
connectDB();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Initialize passport middleware
//app.use(passport.initialize());

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/payments', paymentRoutes);

// Start the server
//const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Server is running on port ${5000}`);
});