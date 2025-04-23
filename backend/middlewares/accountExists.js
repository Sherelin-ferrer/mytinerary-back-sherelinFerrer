import user from "../models/User.js"; // Faltaba esta importación

export default async (req, res, next) => {
    try {
        let emailUser = req.body.email;
        let account = await user.findOne({ email: emailUser });
        
        if (account) {
            return res.status(400).json({
                success: false, // Corregido "succes" a "success"
                message: "User already exists" // Corregido "alredy" a "already"
            });
        }
        
        next();
    } catch (error) {
        next(error);
    }
};