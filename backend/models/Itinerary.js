import { Schema, model } from "mongoose";

let collection = "itineraries";

let schema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: "cities", required: true },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
    activities: [{ type: Schema.Types.ObjectId, ref: "activities" }],
    hashtags: [{ type: String, required: true }],
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: "users" },
        text: { type: String },
        date: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

let itinerary = model(collection, schema);
export default itinerary;

