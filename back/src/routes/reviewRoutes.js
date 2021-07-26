const { Router } = require("express");
const {
  checkReviewer,
} = require("../controllers/reviewControllers//checkReviewer");
const {
  createReview,
} = require("../controllers/reviewControllers/createReview");
const {
  deleteReview,
} = require("../controllers/reviewControllers/deleteReview");
const { getReviews } = require("../controllers/reviewControllers/getReviews");
const {
  updateReview,
} = require("../controllers/reviewControllers/updateReview");

const router = Router();

router.get("/check", checkReviewer);
router.post("/add", createReview);
router.delete("/delete", deleteReview);
router.put("/update", updateReview);
router.get("/", getReviews);

module.exports = router;
