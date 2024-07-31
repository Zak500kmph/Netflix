import { IoIosArrowDropdown } from "react-icons/io";
import Button from "./buttons.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "../../constant.js";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../store/slices.js";
const Header=()=>{
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const button=["Search","Logout"]
 const user=useSelector((store)=>store.addUser.user)
async function handler(item){
    if(item=="Logout"){
        const res=await axios.get(`/v1/logout`)
        console.log(res.data.message)
        dispatch(userAction.setUser(null))
        navigate("/")

    }
 }
    
    return <div className="flex items-center bg-gradient-to-b from-black w-full absolute z-10" >
        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Netflix.logo" className="w-[250px]" />
       { user && <div className="flex ml-auto gap-3 items-center font-semibold text-white ">
            <IoIosArrowDropdown />
            <div className="text-xl">{user.username}</div>
            <Button buttons={button} handler={handler}/>
        </div>}
        
        
    </div>
}
export default Header