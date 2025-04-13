
import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";
import activityRouter from "./activityRouter.js";
import userRoter from "./userRouter.js";

const indexRouter = Router();


indexRouter.use("/cities", cityRouter);
indexRouter.use("/users", userRoter)
indexRouter.use("/itineraries", itineraryRouter);
indexRouter.use("/activities", activityRouter);

export default indexRouter;