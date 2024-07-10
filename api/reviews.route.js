import express from "express"
import ReviewsCtrlr from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCtrlr.apiGetReviews)
router.route("/new").post(ReviewsCtrlr.apiPostReview)
router.route("/:id")
  .get(ReviewsCtrlr.apiGetReview)
  .put(ReviewsCtrlr.apiUpdateReview)
  .delete(ReviewsCtrlr.apiDeleteReview)

export default router