import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaSearchengin } from "react-icons/fa6";


function Search(){
   const User =useSelector((store)=>{return store.addUser.user})
  function searchingHandler(){}
   const navigate=useNavigate()
   useEffect(()=>{
    if(!User){
    navigate("/")
    }
   },[])

    return <div className=" pl-[30%] h-[100vh] flex items-center bg-black">
        <input type="text" placeholder="What you wanna see today" className="bg-slate-900 border-solid-white w-[400px] pl-[40px] h-8 rounded-2xl cursor-text text-white mr-6"></input>
        <FaSearchengin className="w-[20px] h-[200px] text-white hover: cursor-pointer" onClick={searchingHandler}/>
    </div>
}
export default Search