
import { Router } from "express";
import { getAllItineraries, getItinerariesByCity, getItineraryById } from "../controllers/Itinerary/read.js";
import createItinerary from "../controllers/Itinerary/create.js";

const itineraryRouter = Router();

// Definir rutas para itinerarios
itineraryRouter.get("/", getAllItineraries);
itineraryRouter.get("/city/:cityName", getItinerariesByCity);
itineraryRouter.get("/:id", getItineraryById);
itineraryRouter.post("/create", createItinerary);

export default itineraryRouter;