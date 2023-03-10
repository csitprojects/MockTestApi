import Exam from "../../models/Exam";
import mongoose from "mongoose";

export default async function chapterList(req, res){
    try {
      const examId = req.params.examId;
      const subjectId = req.params.subjectId;
      const exam = await Exam.findById(examId);
      const subjects = exam.subjects;
      const subject = subjects.find(subject => subject._id == subjectId);
      if (!subject) {
        res.status(404).json({ message: 'Subject not found' });
        return;
      }
      const chapters = subject.chapters;
      res.json(chapters);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }