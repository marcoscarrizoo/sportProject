const { Router } = require("express");
const { getProducts } = require("../controllers/productControllers/getProducts");
const { createReview } = require("../controllers/productControllers/createReview");
const { createProducts } = require("../controllers/productControllers/createProducts");
const { getProductById } = require('../controllers/productControllers/getProductById');
const { deleteProduct } = require('../controllers/productControllers/deleteProduct');
const { updateProductById } = require('../controllers/productControllers/updateProductById');
const { createProductsSeeds } = require("../controllers/productControllers/createProducts");

const router = Router();


router.get("/", getProducts);
router.post("/addReview", createReview);
router.post("/addProducts", createProducts);
router.get("/:id", getProductById);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProductById);


//Esta funcion carga productos del archivo seeds en la DB
createProductsSeeds();
module.exports = router;
