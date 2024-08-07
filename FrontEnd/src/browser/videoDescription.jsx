import { CiCircleAlert } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export const VideoDescription=()=>{
    let {title,overview}=useSelector((store)=>store.search?.display)
    return<div className="absolute top-[240px] w-[400px] text-white mx-[38px]">
    <h1 className="text-3xl mb-2">{title}</h1>
    <p>{overview}</p>
    <div className="flex">
    <button className="bg-white text-black w-32 h-9 mt-4 rounded-lg hover:bg-opacity-40  flex items-center pl-8"><IoPlayOutline />
    Play</button>
    <button className="bg-white text-black w-32 h-9 mt-4 rounded-lg hover:bg-opacity-40  flex items-center pl-3 ml-4"><IoPlayOutline />
    Watchmore</button>

    </div>
   
    </div>
}