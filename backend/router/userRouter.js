import { Router } from "express";
import AllUsers from "../controllers/Users/read.js";
import register from "../controllers/Users/create.js";
import validator from "../middlewares/validator.js";
import schemaUser from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";



const userRouter = Router();

userRouter.get("/", AllUsers);
userRouter.post("/create",validator(schemaUser),accountExists,createHash,register)



export default userRouter; 