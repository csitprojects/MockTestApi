import express from "express";
const router = express.Router();
import purchaseList from '../controllers/payments/purchasesController'
import buyTest from '../controllers/payments/buyTestController'

router.get('/students/:studentId/purchases', purchaseList)
router.post('/students/:studentId/purchases/:mockTestId/buy', buyTest)


export default router;