import mongoose from "mongoose";
import Exam from "../../models/Exam";
// GET route for retrieving a list of exams


export async function examsList(req, res) {
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

