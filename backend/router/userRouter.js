import { Router } from "express";
import AllUsers from "../controllers/Users/read.js";


const userRoter = Router();

userRoter.get("/", AllUsers)

export default userRoter; 