import { Router } from "express"

import cityRouter from "../router/cityRouter.js"

const indexRouter = Router()

indexRouter.use("/cities", cityRouter);

export default indexRouter