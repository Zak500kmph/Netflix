import { useDispatch } from "react-redux";
import { favMovieUrl } from "../../constant.js";
import { options } from "../../constant.js";
import { AiringToday } from "../../constant.js";
import { Popular } from "../../constant.js";
import { topRated } from "../../constant.js";
import axios from "axios";

async function videoApi(){
    
    try {
        const favroute_movie=(await axios(favMovieUrl, options)).data.results
        
        const airingToday=(await axios(AiringToday,options)).data.results

        const popular=(await axios(Popular,options)).data.results

        const top_rated=(await axios(topRated,options)).data.results
        const responses=[top_rated,popular,airingToday,favroute_movie]
        return responses
    } catch (error) {
        console.log(error)
        return 0
    }
}

export default videoApi