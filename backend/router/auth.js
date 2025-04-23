import { Router } from "express";

import singIn from "../controllers/auth/singin.js";
import schemaSingIn from "../schemas/auth/signIn.js"
import validator from "../middlewares/validator.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import passwordOk from "../middlewares/passwordOk.js";

const routerAuth = Router()

routerAuth.post("/signin",validator(schemaSingIn),accountNotExists,passwordOk,singIn)

export default routerAuth