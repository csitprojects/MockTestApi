
const mongoose = require('mongoose');

// Load the Exam model
const Exam = mongoose.model('Exam');

exports.mocktestSubmit =  async (req, res) => {
  try {
    // Find the exam by ID
    const exam = await Exam.findById(req.params.examId);

    // If tse exam was not found, return a 404 status code with a message
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

    // Validate the submitted answers
    const isValid = validateAnswers(req.body.answers, mockTest.questions);

    // If the answers are invalid, return a 400 status code with a message
    if (!isValid) return res.status(400).send('Invalid answers');

    // Calculate the score for the submitted answers
    const score = calculateScore(req.body.answers, mockTest.questions);

    // Update the mock test results with the submitted answers and score
    mockTest.submittedAnswers = req.body.answers;
    mockTest.score = score;

    // Save the exam to the database
    await exam.save();

    // Return the updated mock test in the response
    res.json(mockTest);
  } catch (err) {
    // If there is an error, return a 500 status code with the error message
    res.status(500).send(err.message);
  }
};
