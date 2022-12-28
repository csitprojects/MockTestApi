import express from "express";
const router = express.Router();
import purchaseList from '../controller/payments/purchasesController'
import buyTest from '../controller/payments/buyTestController'

router.get('/students/:studentId/purchases', purchaseList)
router.post('/students/:studentId/purchases/:mockTestId/buy', buyTest)
