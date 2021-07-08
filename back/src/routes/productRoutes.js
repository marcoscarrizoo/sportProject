const { Router } = require("express");
const { getProducts } = require("../controllers/productController");
const { createReview } = require("../controllers/reviewController");
const { createProducts } = require("../controllers/productController");
const {getProductById} = require('../controllers/productController')

const router = Router();

router.get("/", getProducts);
router.post("/addReview", createReview);
router.post("/addProducts", createProducts);
router.get("/:id" , getProductById)

module.exports = router;
