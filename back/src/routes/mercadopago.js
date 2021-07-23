const { Router } = require("express");
const { mercadoPago, payment, pagosId } = require('../controllers/paymentControllers/mercadoPagoController.js');

const router = Router();



router.get("/", mercadoPago);
router.get("/pagos", payment);


module.exports = router;
