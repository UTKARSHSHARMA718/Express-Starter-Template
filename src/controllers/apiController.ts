import { Request, Response, NextFunction } from "express"
import HttpResponses from "../utils/httpResponses"
import responseMessage from "../constant/responseMessage"
import HttpError from "../utils/httpError"

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req)
            HttpResponses(req, res, 200, responseMessage.SUCCESS)
        } catch (err: unknown) {
            console.log(`Error occured in self route: ${err}`)
            HttpError({
                req,
                nextFunc: next,
                errorStatusCode: 500,
                err,
            })
        }
    },
}
