
const mongoose = require('mongoose');

// Load the Exam model
const Exam = mongoose.model('Exam');

// GET route for retrieving a list of exams
exports.examsList = async (req, res) => {
    try {
        // Find all exams in the database
        const exams = await Exam.find();

        // Return the exams in the response
        res.json(exams);
    } catch (err) {
        // If there is an error, return a 500 status code with the error message
        res.status(500).send(err.message);
    }
};

