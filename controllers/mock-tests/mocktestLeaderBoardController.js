
import mongoose from "mongoose";
import Exam from "../../models/Exam";

export default async function leaderBoard(req, res){
  try {
    // Find the exam by ID
    const exam = await Exam.findById(req.params.examId);

    // If the exam was not found, return a 404 status code with a message
    if (!exam) return res.status(404).send('Exam not found');

    // Find the subject by ID
    const subject = exam.subjects.id(req.params.subjectId);

    // If the subject was not found, return a 404 status code with a message
    if (!subject) return res.status(404).send('Subject not found');

    // Find the chapter by ID
    const chapter = subject.chapters.id(req.params.chapterId);

    // If the chapter was not found, return a 404 status code with a message
    if (!chapter) return res.status(404).send('Chapter not found');

    // Find the mock test by ID
    const mockTest = chapter.mockTests.id(req.params.mockTestId);

    // If the mock test was not found, return a 404 status code with a message
    if (!mockTest) return res.status(404).send('Mock test not found');

    // Retrieve the leaderboard for the mock test
    const leaderboard = mockTest.results
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    // Return the leaderboard in the response
    res.json(leaderboard);
  } catch (err) {
    // If there is an error, return a 500 status code with the error message
    res.status(500).send(err.message);
  }
};
