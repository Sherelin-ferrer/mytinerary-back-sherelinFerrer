import { Schema, model } from "mongoose";

let collection = "users";

let schema = Schema(
  {
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },       
    photo: { type: String, default: "https://i.imgur.com/placeholder.jpg" } 
  },
  { timestamps: true }
);

let user = model(collection, schema);
export default user;
