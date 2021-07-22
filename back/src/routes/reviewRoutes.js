const { Router } = require("express");
const { createReview } = require("../controllers/reviewControllers/createReview");


const router = Router();

router.post("/addReview", createReview);

module.exports = router;
