import { Schema, model } from "mongoose";

let collection = "users";

let schema = Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true }
  },
  { timestamps: true }
);

let user = model(collection, schema);
export default user;
