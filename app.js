const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const examRoutes = require('./routes/exams');
const mockTestRoutes = require('./routes/mock-tests');
const paymentRoutes = require('./routes/payments');
const errorHandler = require('./middlewares/error-handler');

const app = express();

// Connect to the database
connectDB();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Initialize passport middleware
app.use(passport.initialize());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Use the user routes
app.use('/api/users', userRoutes);

// Use the exam routes
app.use('/api/exams', examRoutes);

// Use the mock test routes
app.use('/api/mock-tests', mockTestRoutes);

// Use the payment routes
app.use('/api/payments', paymentRoutes);
/*
// Use the error handler middleware
app.use(errorHandler);
*/
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});