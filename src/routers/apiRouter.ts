import express from "express"
import apiController from "../controllers/apiController"

const router = express.Router()

router.route("/").get(apiController.self)

export default router
