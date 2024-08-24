import app from "./app"
import dotenv from "dotenv"
dotenv.config()

const server = app.listen(process.env.PORT)

;(() => {
    try {
        console.info("Application server is started", {
            meta: {
                port: process.env.PORT,
            },
        })
    } catch (err) {
        console.info("Error occured while", {
            meta: err,
        })

        server.close((err: unknown) => {
            if (err) {
                console.log("Error while closing server")
                return
            }
            console.log("Application server closed successfully!")
        })
    }
})()
