import bcryptjs from "bcryptjs";


export default async (req,res,next) => {

    try {
        let passwordBody = req.body.password
       
        let passwordBD = req.user.password

        let compare = bcryptjs.compareSync(
            passwordBody,
            passwordBD
        )
        if (compare) {
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "Password Invalid"

        })

    } catch (error) {

    }

}