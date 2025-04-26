import jwt from "jsonwebtoken"


export default (req,res,next) => {
console.log("entro a jwt")
console.log(process.env.TOKEN) 

const token = jwt.sign(
 {email: req.user.email},
 process.env.TOKEN,
{expiresIn: "1d"}

)
req.token = token
next ()
    
}