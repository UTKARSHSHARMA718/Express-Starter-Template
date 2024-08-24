import express, { Request, Response, NextFunction } from "express"
import path from "path"
import router from "./routers/apiRouter"
import globalErrorHandler from "./middleware/globalErrorHandler"
import responseMessage from "./constant/responseMessage"
import httpError from "./utils/httpError"

const app = express()

//Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, "../", "public")))

//Routes
app.use("/api/v1", router)

//404 handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND("Route"))
    } catch (err) {
        httpError({ nextFunc: next, err, req, errorStatusCode: 404 })
    }
})

//Global Error Handler
app.use(globalErrorHandler)

export default app
