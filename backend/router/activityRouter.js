// router/activityRouter.js
import { Router } from "express";
import { getAllActivities, getActivitiesByItinerary, getActivityById } from "../controllers/Activity/read.js";
import createActivity from "../controllers/Activity/create.js";

const activityRouter = Router();

// Definir rutas para actividades
activityRouter.get("/", getAllActivities);
activityRouter.get("/itinerary/:itineraryId", getActivitiesByItinerary);
activityRouter.get("/:id", getActivityById);
activityRouter.post("/create", createActivity);

export default activityRouter;