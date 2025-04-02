import { useEffect } from "react";
import { MOVIE_URL, options } from "../../utills/Constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../../utills/movieSlice";

const useGetNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async()=>{
        const data = await fetch(MOVIE_URL,options)
        const result = await data.json()
        // console.log(result.results);
        dispatch(addMovie(result.results))
      }
      useEffect(()=>{
        getNowPlayingMovies()
    },[])
}

  export default useGetNowPlayingMovies