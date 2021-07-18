const { Router } = require("express");
const { createOrder } = require('../controllers/orderControllers/createOrder');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { updateOrderById } = require('../controllers/orderControllers/updateOrderById');
const { deleteOrderById } = require('../controllers/orderControllers/deleteOrderById');
const { getOrdersByUserId } = require('../controllers/orderControllers/getOrdersByUserId');


const router = Router();

router.post("/addOrder", createOrder);
router.get("/", getAllOrders);
router.get("/update:id", updateOrderById);
router.get("/delete/:id", deleteOrderById);
router.get("/:userId", getOrdersByUserId);

module.exports = router;
