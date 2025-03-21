import { Router } from "express";

import { AllCities, CityByName, CityByCountry } from "../controllers/read.js"; 

const routerCities = Router();

// Obtener todas las ciudades
routerCities.get("/allCities", AllCities);

// Obtener una ciudad por nombre
routerCities.get("/cityByName/:name", CityByName);

// Obtener ciudades por país
routerCities.get("/cityByCountry/:country", CityByCountry);

export default routerCities;
