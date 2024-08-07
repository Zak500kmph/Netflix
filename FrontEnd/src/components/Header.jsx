import { IoIosArrowDropdown } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "../../constant.js";
import { useNavigate } from "react-router-dom";
import { SearchAction, userAction } from "../../store/slices.js";
import { useState } from "react";
import Buttons from "./buttons.jsx";
const Header=()=>{
    const dispatch= useDispatch()
    const [setStat,getStat]=useState(true)
    const navigate=useNavigate()
    const Searched=useSelector((store)=>store.search.search)
    let button=[]
    if(Searched){
        button=["Home","logout"]
    }else{
        button=["Search","Logout"]
    }
 const user=useSelector((store)=>store.addUser.user)
async function handler(item){
    if(item=="Logout"){
        const res=await axios.get(`/v1/logout`)
        console.log(res.data.message)
        dispatch(userAction.setUser(null))
        navigate("/")}
    if(item=="Search"){
      dispatch(SearchAction.toggle())
        navigate("/Search")

    }
    if(item=="Home"){
        dispatch(SearchAction.toggle())
          navigate("/browser")
  
      }

 }
 function SearchHandler(){
    setStat(true)
    navigate("/Search")
 }
    
    return <div className="flex items-center bg-gradient-to-b from-black w-full absolute z-10 " >
        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Netflix.logo" className="w-[250px]" />
       { user && <div className="flex ml-auto gap-3 items-center font-semibold text-white mr-8 ">
            <IoIosArrowDropdown />
            <div className="text-xl">{user.username}</div>
            <Buttons items={button} handler={handler}/> 
        </div>}
        
        
    </div>
}
export default Header