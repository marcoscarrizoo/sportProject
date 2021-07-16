const { Router } = require("express");
const { createOrder } = require('../controllers/order/createOrder');
// const {
//   getOrders,
//   getUserOrders,
//   getOrder,
//   updateOrder,
// } = require("../controllers/orderController");

const router = Router();

router.post("/addOrder", createOrder);
// router.get("/", getOrders);

module.exports = router;
