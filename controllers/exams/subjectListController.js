const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Exam = mongoose.model('Exam');


exports.subjectList = async (req, res) => {
    try {
      // Find the exam by ID
      const exam = await Exam.findById(req.params.examId);
  
      // If the exam was not found, return a 404 status code with a message
      if (!exam) return res.status(404).send('Exam not found');
  
      // Return the subjects in the response
      res.json(exam.subjects);
    } catch (err) {
      // If there is an error, return a 500 status code with the error message
      res.status(500).send(err.message);
    }
  }