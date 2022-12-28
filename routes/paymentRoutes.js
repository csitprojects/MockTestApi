const express = require('express');
const router = express.Router();
const purchasesController = require('../controller/payments/purchasesController')
const buyTestController = require('../controller/payments/buyTestController')

router.get('/students/:studentId/purchases', purchasesController.purchaseList)
router.post('/students/:studentId/purchases/:mockTestId/buy', buyTestController.buyTest)
