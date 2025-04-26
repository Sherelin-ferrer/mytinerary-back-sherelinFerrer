import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import user from "../models/User.js";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.TOKEN
        },
     async(jwt_payload,done) => {
    try {
        let User =await user.findOne({email: jwt_payload.email, online:true})
        if (User) {
           return done(null,user)
        } else {
          return  done(null,null)
        }
    } catch (error) {
        return done(error,null)
    }

     }
    )
)