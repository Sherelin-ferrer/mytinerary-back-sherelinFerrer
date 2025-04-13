import { Schema, model } from "mongoose";

let collection = "activities";

let schema = Schema(
    {
        name: { type: String, required: true }, 
        photo: { type: String, required: true }, 
        description: { type: String, required: true }, 
        itinerary: { type: Schema.Types.ObjectId, ref: 'itineraries' } 
   
    },
    { timestamps: true }
);

let activity = model(collection, schema);
export default activity;
