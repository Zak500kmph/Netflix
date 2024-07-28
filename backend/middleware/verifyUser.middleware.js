import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { apiError } from "../utils/errorHandler.js"
async function verifyUser(req,_,next){
    try {
        const token =req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","")
        if(!token){throw new ApiError("Unauthorized Request",400)}
        const info=await jwt.verify(token,process.env.REFERSH_TOKEN_SECRET)
        
        if(!info){
            throw new apiError("invalid token",300)
        }
        const user=await User.findById(info.id)
        req.user=user;
        next()
    } catch (error) {
        throw new apiError("Login first",302)
    }
}
export default verifyUser