import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Browser(){
  const User=useSelector((store)=>store.addUser.user)
  const navigate=useNavigate()
 useEffect(()=>{
  if(!User){
    navigate("/")
   }
 },[])
    return <div className="pt-[110px]">
    <div className="text-xl">
        
    </div>
    <div className="text-xl">vnke</div>
    <div className="text-xl">vnke</div>
    <div className="text-xl">vnke</div>
    </div>
    

}
export default Browser