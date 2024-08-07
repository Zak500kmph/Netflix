import { useSelector } from "react-redux"
import MovieList from "./movieList"
function Movie(){
     const movies=useSelector((store)=>store.movie)
     const {favMovie,popular,topRated,airingToday}=movies
     const nowMovie=[[favMovie,"Favroute-movie"],[popular,"Popular-Movie"],[topRated,"Top-Rated"],[airingToday,"Air-Today"]]
     
return <div className=" absolute w-[100%] bg-slate-900 mt-[-100px] ">
<div className=""  >
    {nowMovie.map((items)=><MovieList key={items.index} movieDetail={items} />)}
</div>
</div>
}
export default Movie