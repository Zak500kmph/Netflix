import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import VideoContainer from "../browser/videoContainer"
import { VideoDescription } from "../browser/videoDescription"
import videoApi from "../functions/videosApi"
import { useDispatch } from "react-redux"
import { movieAction } from "../../store/slices"
import Movie from "../browser/movie"

 function Browser(){
  const dispatch=useDispatch()
  const User=useSelector((store)=>store.addUser.user)
  let x=[]
  const navigate=useNavigate()
 useEffect(()=>{
   async function getData(){
    x=await videoApi()
    const topRated=x[0]
    const popular=x[1]
    const airingToday=x[2]
    const favMovie=x[3]
    dispatch(movieAction.addFavMovie(favMovie))
    dispatch(movieAction.addAiringToday(airingToday))
    dispatch(movieAction.addPopular(popular))
    dispatch(movieAction.addTopRated(topRated))
  }
  getData()
  if(!User){
    navigate("/")
  }
  
},[])
    return <>
    <VideoContainer/>
    <VideoDescription/>
    <Movie/>
    
    
    
    </>
  
    

}
export default Browser