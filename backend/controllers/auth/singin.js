
import user from "../../models/User.js"

export default async (req,res,next) => {

    try {
        return res.status(200).json({

            success: true,
            message: "Singned In"
        })
    } catch (error) {
        next(error)
    }
}