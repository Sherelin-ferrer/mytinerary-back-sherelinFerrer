
import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";
import activityRouter from "./activityRouter.js";
import userRoter from "./userRouter.js";
import routerAuth from "./auth.js";

const indexRouter = Router();


indexRouter.use("/cities", cityRouter);
indexRouter.use("/users", userRoter)
indexRouter.use("/itineraries", itineraryRouter);
indexRouter.use("/activities", activityRouter);
indexRouter.use("/auth", routerAuth);

export default indexRouter;