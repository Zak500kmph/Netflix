import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { options } from "../../constant"
import { useEffect } from "react"
import { SearchAction } from "../../store/slices"

function VideoContainer(){
    let movieId=useSelector((store)=>store.search.display?.id)
    let key=useSelector((store)=>store.search.trailer?.key)
    const dispatch=useDispatch()
    async function Play(){
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`
            ,options);
            return response.data.results;
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    }
     useEffect(()=>{
     async function res(){
        const x=await Play()
        const trailer=x.filter((items)=>items.type=="Trailer")[0]
        dispatch(SearchAction.trailer(trailer))
     }
     res()
     },[movieId])

    return<div className="">
     <iframe src={ key ? `https://www.youtube.com/embed/${key}?si=gKsQISVpk1ieW-9o&autoplay=1&mute=1&loop=1&playlist=${key}` : `https://www.youtube.com/embed/PLl99DlL6b4?si=gKsQISVpk1ieW-9o&autoplay=1&mute=1}` }title="YouTube video player"
     className="w-screen aspect-video h-[580px]"></iframe>
    </div>
}
export default VideoContainer