
import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";
import activityRouter from "./activityRouter.js";

const indexRouter = Router();

// Definir rutas principales
indexRouter.use("/cities", cityRouter);
indexRouter.use("/itineraries", itineraryRouter);
indexRouter.use("/activities", activityRouter);

export default indexRouter;