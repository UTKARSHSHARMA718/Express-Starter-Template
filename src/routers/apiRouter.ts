import express from "express"
import apiController from "../controllers/apiController"
import rateMitter from "../middleware/rateLimitterMiddleware"

const router = express.Router()

router.route("/self").get(rateMitter, apiController.self)
router.route("/health").get(apiController.health)

export default router
