const { Router } = require("express");
const { mercadoPago, payment, pagosId } = require('../controllers/paymentControllers/mercadopagoController');

const router = Router();



router.get("/:orderId", mercadoPago);
router.get("/pagos", payment);


module.exports = router;
