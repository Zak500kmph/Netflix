import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const Users=mongoose.Schema({
     username:{
        type:String,
        required:true,
        unique:[true,"please Enter the unique username"]
        
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     password:{
        type:String,
        required:[true,"Please Enter unique password"]
     },
     refreshToken:{
        type:String,
     }
        },{timestamps:true})
Users.pre("save",async function (next){
   if(this.isModified("password")){
      this.password=await bcrypt.hash(this.password,10)
   next()
   }
   next()
})
Users.methods.isPasswordCorrect=async function (password_input){
return await bcrypt.compare(password_input,this.password)// it return true if inputpassword == encrptpassword
} 
Users.methods.generateAccesToken=async function (){
   return await jwt.sign({
      id:this._id,
      email:this.email,
      fullName:this.fullName
   },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY}) 
} 

Users.methods.generateRefreshToken=async function (){
    return await jwt.sign({
      id:this._id,
      email:this.email,
      fullName:this.fullName
   },process.env.REFERSH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY}) 
} 
export const User=mongoose.model("User",Users)