const { Router } = require("express");
const { createUpdateOrder } = require('../controllers/orderControllers/createUpdateOrder');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { updateOrderById } = require('../controllers/orderControllers/updateOrderById');
const { deleteOrderByIdUser } = require('../controllers/orderControllers/deleteOrderByIdUser');
const { getOrdersByUserId } = require('../controllers/orderControllers/getOrdersByUserId');
const { deleteProductById } = require('../controllers/orderControllers/deleteProductById');
const { updateOderState } = require('../controllers/orderControllers/updateOderState');


const router = Router();

//Esta ruta es un PUT prorque si existe una orden la modifica,
//Si no, crea la orden.
router.get("/", getAllOrders);
router.get("/update/:id", updateOrderById);
router.get("/delete/:id", deleteOrderByIdUser);
router.get("/:userId", getOrdersByUserId);
router.delete("/delete/product", deleteProductById);
router.put("/create/update", createUpdateOrder);
router.put("/update/orderstate", updateOderState);

module.exports = router;
