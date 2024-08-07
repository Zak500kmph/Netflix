import { IMAGEURL } from "../../constant"
function VideoCard({poster,items,Handler,Id}){
    
    return <div className="" onClick={()=>Handler(Id.id,Id.original_title,Id.overview)}>
<div className="text-white  bg-slate-900  ">
<div>
<div className="">
<img src={`${IMAGEURL}/${poster}`}  alt={`Poster`} className=" ml-2 min-w-[200px] rounded-lg" />

</div>
</div>
</div>
    </div>
}
export default VideoCard