// router/activityRouter.js
import { Router } from "express";
import AllActivity from "../controllers/Activity/read.js";

import createActivity from "../controllers/Activity/create.js";

const activityRouter = Router();

activityRouter.get("/", AllActivity);

activityRouter.post("/create", createActivity);

export default activityRouter;