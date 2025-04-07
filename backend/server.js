import  express  from "express";
import "dotenv/config.js";
import "./config/database.js"
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/indexRouter.js";
import error_400 from "./middlewares/error_400.js";
import error_404 from "./middlewares/error_404.js";
import error_handler from "./middlewares/error_handler.js";





const server = express()
const PORT = process.env.PORT
const ready =()=> console.log("server ready in port:"+PORT)

// activar datos complejos en la url
server.use(express.urlencoded({ extended: true }))
// manejar formato json
server.use(express.json())
// se encarga de la seguridad  (npm install cors)
server.use(cors())
// libreria orden de registros (npm install morgan)
server.use(morgan('dev'))


server.use('/api', indexRouter)
server.use(error_400)
server.use(error_404)
server.use(error_handler)

server.listen(PORT,ready)