import { Router } from "express";

import { AllCities, CityByName, cityById } from "../controllers/read.js"; 
import createCity from "../controllers/create.js";
import createManyCities from "../controllers/createMany.js";

const routerCities = Router();


routerCities.get("/", AllCities);

routerCities.get("/allCities", AllCities);

routerCities.get("/cityByName/:name", CityByName);

routerCities.get("/:id", cityById);

routerCities.post("/create", createCity)

routerCities.post("/createMany", createManyCities)

export default routerCities;
