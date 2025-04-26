import user from "../models/User.js"; 

export default async (req, res, next) => {
    try {
        let emailUser = req.body.email;
        let account = await user.findOne({ email: emailUser });
        
        if (account) {
            return res.status(400).json({
                success: false, 
                message: "User already exists" 
            });
        }
        
        next();
    } catch (error) {
        next(error);
    }
};