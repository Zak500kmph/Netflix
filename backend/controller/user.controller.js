import {asyncHandler} from "../utils/asyncHandler.js"
import { apiError } from "../utils/errorHandler.js"
import { User } from "../models/user.model.js"
import { apiResponse } from "../utils/response.js"
async function deleteAll(req,res){
    await User.deleteMany({})
    res.send("all files deleted")

}

async function generateRefreshAccessToken(userId){
    const user=await User.findById(userId)
    const refreshToken=await user.generateRefreshToken()
const accessToken=await user.generateAccesToken()
user.refreshToken=refreshToken
await user.save({validateBefeoreSave:false})
return [accessToken,refreshToken]

}


export const register=asyncHandler(
    async (req,res)=>{
        const {Username,Password,Email}=req.body
        const username=Username
        const password=Password
        const email=Email
        if(!username||!password||!email){
            throw new apiError("All fields are required ",409)
        }
        const user= await User.findOne({
            $or:[{username},{email}]
        })
        if(user){
           throw new apiError("already exist",400)

        }
        
        const createdUser=await User.create({
          username,
          password,
          email,
        })
        generateRefreshAccessToken(createdUser._id)// very important to note 
        // deleteAll()
        res.json(new apiResponse("user-created successfully",createdUser._id,200))
    }
)
export const login =asyncHandler(async (req,res)=>{
    const {Username,Password}=req.body
    const username=Username
    const password=Password
    if(!username||!password){
     
        throw new apiError("please enter your username and password both",404)
    }
    const user=await User.findOne({username})
    if(!user){
        throw new apiError("please enter valid credential",404)
    }
    const userPasswordverifier=await user.isPasswordCorrect(password)
    if(!userPasswordverifier){
       
        throw new apiError("the Entered password is incorrect")
    }
    const [refreshToken,accessToken]=await generateRefreshAccessToken(user._id)
    let option={
        httpOnly:true,
        secure:true
    }
    user.password=" ";
    user.refreshToken=refreshToken

   res.status(200).cookie("refreshToken",refreshToken,option).cookie("accessToken",accessToken,option).json(new apiResponse("User Log In Successfully",
    {
       user,
       accessToken,
       refreshToken
    }
    ,
    200
 ))
} )


export const logout=asyncHandler(async (req,res)=>{
    const {user}=req
    const newUser=await User.findOneAndUpdate(user._id,{
        $set:{
            refreshToken:""
        }
    },{
        new:true
    })
    const options={
            "httpOnly":true,
            "secure": true
          }
          res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json(new  apiResponse("User Log-Out",{},"200"))
    

})
export {deleteAll}