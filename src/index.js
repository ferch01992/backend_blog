import express from "express"

import { router } from "./router/router.js"

const app = express()

app.use(express.json())

app.use("/", router)

app.listen(3001, () => {
  console.log("SERVER corriendo en http://localhost:3000")
})
