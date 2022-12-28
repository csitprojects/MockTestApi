/*

/api/exams/:id/subjects/:id/chapters/:id:                                           Retrieves a specific chapter for a specific subject in a specific exam.
*/

const express = require("express");
const router  = express.Router();
const examsController = require('../controllers/exams/examsController');
const examByIdController = require('../controllers/exams/examsByIdController');
const subjectListController = require('../controller/exams/subjectListController');
const subjectByIdController = require('../controller/exams/subjectByIdController');
const chapterListController  = require("../controllers/exams/chapterListController");


router.get('/exams', examsController.examsList);
router.get('/exams/:examId', examByIdController.examsById)
router.get('/exams/:examId/subjects', subjectListController.subjectList)
router.get('/exams/:examId/subjects/:subjectId', subjectByIdController.subjectGet)
router.get('/exams/:examId/subjects/:subjectId/chapters',chapterListController.chapterList)  
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId',) 