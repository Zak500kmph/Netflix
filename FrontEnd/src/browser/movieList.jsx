
import { useDispatch } from "react-redux"
import VideoCard from "./videoCard"
import { SearchAction } from "../../store/slices"

function MovieList({movieDetail}){
    const dispatch=useDispatch()
    const newMoviesDet=movieDetail[0]
    function Handler(id,title,overview){
        dispatch(SearchAction.display({id,title,overview}))
    }
    return <div className="">
    
    <div className="font-medium pl-6 text-[40px] text-white">{movieDetail[1]}</div>
    <div className="flex overflow-x-auto no-scrollbar hover:cursor-pointer ">
        
   {newMoviesDet.map((items)=><VideoCard key={items.id} poster={items.poster_path} Handler={Handler}  Id={items}/>)}
    </div>
    </div>
}
export default MovieList