const { Router } = require("express");
const { createOrder } = require('../controllers/orderControllers/createOrder');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { updateOrderById } = require('../controllers/orderControllers/updateOrderById');


const router = Router();

router.post("/addOrder", createOrder);
router.get("/", getAllOrders);
router.get("/:id", updateOrderById);



module.exports = router;
