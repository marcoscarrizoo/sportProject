const { Router } = require("express");
const { getProducts } = require("../controllers/productController");
const { createReview } = require("../controllers/reviewController");
const { createProducts } = require("../controllers/productController");

const router = Router();

router.get("/", getProducts);
router.post("/addReview", createReview);
router.post("/addProduct", createProducts);

module.exports = router;
