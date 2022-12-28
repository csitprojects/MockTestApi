import express from "express";
const router = express.Router();

import mockTestCreate from '../controllers/teachers/mockTestCreateController'
import mockTestDelete from '../controllers/teachers/mockTestDeleteController'
import mockTestListT from '../controllers/teachers/mockTestListTController'
import mockTestEdit  from '../controllers/teachers/mockTestEditController'


// GET route for retrieving the mock tests authored by a specific teacher
router.get('/teachers/:teacherId/mock-tests', mockTestListT)
router.post('/teachers/:teacherId/mock-tests/create', mockTestCreate)
router.patch('/teachers/:teacherId/mock-tests/:mockTestId/edit', mockTestEdit)
router.delete('/teachers/:teacherId/mock-tests/:mockTestId/delete', mockTestDelete )


export default router;
