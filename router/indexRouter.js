import { Router } from "express"

import cityRouter from "../router/cityRouter.js"

const indexRouter = Router()

indexRouter.use("/city", cityRouter);

export default indexRouter