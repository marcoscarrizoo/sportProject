const { Router } = require("express");
const { mercadoPago, payment, pagosId } = require('../controllers/paymentControllers/mercadopagoController');

const router = Router();



router.get("/pagos", payment);
router.get("/:orderId", mercadoPago);


module.exports = router;
