

import express from 'express';
const router  = express.Router();

//imports for chapters
import examsList from '../controllers/exams/examsController'
import examsById from '../controllers/exams/examByIdController'
import subjectList from '../controllers/exams/subjectListController'
import subjectById from '../controllers/exams/subjectByIdController'
import chapterList from "../controllers/exams/chapterListController"
import  chapterById from '../controllers/exams/chapterByIdController'

//imports for mock-tests
import mocktestList from '../controllers/mock-tests/mocktestListController'
import mocktestById from '../controllers/mock-tests/mocktestByIdController'
import mocktestSubmit from '../controllers/mock-tests/mocktestSubmitController'
import mocktestResult from '../controllers/mock-tests/mocktestResultController'  
import mocktestLeaderBoard from '../controllers/mock-tests/mocktestLeaderBoardController'
//upto chapter routes
router.get('/', examsList);
router.get('/:examId', examsById)
router.get('/:examId/subjects', subjectList)
router.get('/:examId/subjects/:subjectId', subjectById)
router.get('/:examId/subjects/:subjectId/chapters',chapterList)  
router.get('/:examId/subjects/:subjectId/chapters/:chapterId', chapterById) 


//mocktests routes
router.get('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests',  mocktestList) 
router.get('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId', mocktestById) 
router.get('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/submit', mocktestSubmit) 
router.get('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/result', mocktestResult) 
router.get('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mocktestId/leaderboard', mocktestLeaderBoard) 

//payment
//router.post('/:examId/subjects/:subjectId/chapters/:chapterId/mock-tests/:mockTestId/purchase',mockPurchase)

export default router;
