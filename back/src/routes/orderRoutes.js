const { Router } = require("express");
const { createOrder } = require('../controllers/orderControllers/createOrder');
const { updateOrder } = require('../controllers/orderControllers/updateOrder');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { deleteOrder } = require('../controllers/orderControllers/deleteOrder');
const { getOrdersByUserId } = require('../controllers/orderControllers/getOrdersByUserId');
const { deleteProductById } = require('../controllers/orderControllers/deleteProductById');
const { getOrderById } = require('../controllers/orderControllers/getOrderById');


const router = Router();

router.post("/create", createOrder);
router.put("/update/:id", updateOrder);
router.delete("/delete/product", deleteProductById);
router.delete("/delete/:id", deleteOrder);
router.get("/:id", getOrderById);
router.get("/user/:id", getOrdersByUserId);
router.get("/", getAllOrders);


module.exports = router;
