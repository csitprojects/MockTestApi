

const express = require("express");
const router  = express.Router();

//imports for chapters
const examsController = require('../controllers/exams/examsController');
const examByIdController = require('../controllers/exams/examsByIdController');
const subjectListController = require('../controller/exams/subjectListController');
const subjectByIdController = require('../controller/exams/subjectByIdController');
const chapterListController  = require("../controllers/exams/chapterListController");
const chapterByIdController = require('../controllers/exams/chapterById');

//imports for mock-tests
const mocktestListController = require('../controllers/mock-tests/mocktestListController');
const mocktestByIdController = require('../controllers/mock-tests/mocktestByIdController')
const mocktestStartController = require('../controllers/mock-tests/mocktestStartController');
const mocktestSubmitController = require('../controllers/mock-tests/mocktestSubmitController')
const mocktestResultController = require('../controllers/mock-tests/mocktestResultController')  
const mocktestLeaderBoardController = require('../controllers/mock-tests/mocktestLeaderBoardController')
//upto chapter routes
router.get('/exams', examsController.examsList);
router.get('/exams/:examId', examByIdController.examsById)
router.get('/exams/:examId/subjects', subjectListController.subjectList)
router.get('/exams/:examId/subjects/:subjectId', subjectByIdController.subjectGet)
router.get('/exams/:examId/subjects/:subjectId/chapters',chapterListController.chapterList)  
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId', chapterByIdController.chapterById) 


//mocktests routes
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests',  mocktestListController.mocktestList) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId', mocktestByIdController.mocktestById) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/submit', mocktestSubmitController.mocktestSubmit) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/result', mocktestResultController.getResult) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/leaderboard', mocktestLeaderBoardController) 

//payment
router.post('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mockTestId/purchase',mocktestPurchaseController.mockPurchase)