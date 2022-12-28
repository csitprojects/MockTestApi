

import express from 'express';
const router  = express.Router();

//imports for chapters
import examsList from '../controllers/exams/examsController'
import examsById from '../controllers/exams/examsByIdController'
import subjectList from '../controller/exams/subjectListController'
import subjectById from '../controller/exams/subjectByIdController'
import chapterList from "../controllers/exams/chapterListController"
import  chapterById from '../controllers/exams/chapterById'

//imports for mock-tests
import mocktestList from '../controllers/mock-tests/mocktestListController'
import mocktestById from '../controllers/mock-tests/mocktestByIdController'
import mocktestSubmit from '../controllers/mock-tests/mocktestSubmitController'
import mocktestResult from '../controllers/mock-tests/mocktestResultController'  
import mocktestLeaderBoard from '../controllers/mock-tests/mocktestLeaderBoardController'
//upto chapter routes
router.get('/exams', examsList);
router.get('/exams/:examId', examsById)
router.get('/exams/:examId/subjects', subjectList)
router.get('/exams/:examId/subjects/:subjectId', subjectById)
router.get('/exams/:examId/subjects/:subjectId/chapters',chapterList)  
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId', chapterById) 


//mocktests routes
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests',  mocktestList) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId', mocktestById) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/submit', mocktestSubmit) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/result', mocktestResult) 
router.get('/exams/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/leaderboard', mocktestLeaderBoard) 

//payment
//router.post('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mockTestId/purchase',mockPurchase)

export default router;
