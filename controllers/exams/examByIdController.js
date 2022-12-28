
const mongoose = require('mongoose');
// Load the Exam model
const Exam = mongoose.model('Exam');

// GET route for retrieving a list of exams
exports.examsById = async (req, res) => {
    try {
      // Find the exam by ID
      const exam = await Exam.findById(req.params.examId);
  
      // If the exam was not found, return a 404 status code with a message
      if (!exam) return res.status(404).send('Exam not found');
  
      // Return the exam in the response
      res.json(exam);
    } catch (err) {
      // If there is an error, return a 500 status code with the error message
      res.status(500).send(err.message);
    }
  }

;
