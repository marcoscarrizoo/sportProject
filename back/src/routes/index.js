const { Router } = require("express");
const router = Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const userRoutes = require("./usersRoutes");
const mercadoRoutes = require("./mercadopago");


router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/order", orderRoutes);
router.use("/user", userRoutes);
router.use("/mercadopago", mercadoRoutes);


module.exports = router;
