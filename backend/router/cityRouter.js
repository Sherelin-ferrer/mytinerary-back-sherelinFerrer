
import { Router } from "express";
import { AllCities, CityByName, cityById } from "../controllers/Cities/read.js";
import createCity from "../controllers/Cities/create.js";
import createManyCities from "../controllers/Cities/createMany.js";


const cityRouter = Router();

// Definir rutas para ciudades
cityRouter.get("/", AllCities);
cityRouter.get("/allCities", AllCities);
cityRouter.get("/cityByName/:name", CityByName);
cityRouter.get("/:id", cityById);
cityRouter.post("/create", createCity);
cityRouter.post("/createMany", createManyCities);


export default cityRouter;
