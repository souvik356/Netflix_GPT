import { useEffect } from "react";
import { options } from "../../utills/Constants";
import { useDispatch } from "react-redux";
import { trailerInfo } from "../../utills/movieSlice";

 const useTrailerVideo = (movieId)=>{
  const dispatch = useDispatch()
  
  const getVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options)
    const json = await data.json()
    // console.log(json);

    const filterdTrailer = json.results.filter((video)=> video.type = "Trailer")
    const trailer = filterdTrailer.length === 0 ? json.results[0] : filterdTrailer[0]
    // console.log(trailer);
    dispatch(trailerInfo(trailer))
  }

  useEffect(()=>{
     getVideo()
  },[])
}

export default useTrailerVideo
