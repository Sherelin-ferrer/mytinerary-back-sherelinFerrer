import { Schema, model } from "mongoose";

let collection = "cities";
let schema = Schema(

    {
        name: { type: String, required: true }, // Nombre de la ciudad
        photo: { type: String, required: true }, // Foto (URL o ruta local)
        country: { type: String, required: true }, // País
        continent: { type: String, required: true }, // Continente
        description: { type: String, required: true }, // Descripción
        currency: { type: String, required: true }, // Divisa
        population: { type: Number, required: true }, // Población
        timezone: { type: String, required: true }, // Zona horaria
        
    },
    { timestamps: true }

) 
let city = model (collection,schema)
export default city;