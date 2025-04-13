import { Router } from "express";
import AllUsers from "../controllers/Users/read.js";
import updateUser from "../controllers/Users/update.js"
import deleteUser from "../controllers/Users/delete.js";

const userRoter = Router();

userRoter.get("/", AllUsers)
userRoter.put("/updateUser", updateUser)
userRoter.delete("/deleteUser", deleteUser)

export default userRoter; 