import { Schema, model } from "mongoose";

let collection = "cities";
let schema = Schema(

    {
        name: { type: String, required: true }, 
        photo: { type: String, required: true }, 
        country: { type: String, required: true }, 
        continent: { type: String, required: true },
        description: { type: String, required: true }, 
        currency: { type: String, required: true }, 
        population: { type: Number, required: true }, 
        timezone: { type: String, required: true }, 
        itineraries: [{ type: Schema.Types.ObjectId, ref: "itineraries" }]

    },
    { timestamps: true }

)
let city = model(collection, schema)
export default city;