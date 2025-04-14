
import { Router } from "express";
import {AllItineraries, ItinerariesByCity, ItineraryById } from "../controllers/Itinerary/read.js";
import createItinerary from "../controllers/Itinerary/create.js";
import deleteItinerary from "../controllers/Itinerary/delete.js";
import updateItineray from "../controllers/Itinerary/update.js";

const itineraryRouter = Router();


itineraryRouter.get("/",AllItineraries);
itineraryRouter.get("/city/:cityName", ItinerariesByCity);
itineraryRouter.get("/:id", ItineraryById);
itineraryRouter.post("/create", createItinerary);
itineraryRouter.delete("/deleteItinerary", deleteItinerary);
itineraryRouter.put("/updateItinerary", updateItineray)

export default itineraryRouter;