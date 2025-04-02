import { useDispatch } from "react-redux"
import { options, POPULAR_MOVIE_URL } from "../../utills/Constants"
import { popularMovie } from "../../utills/movieSlice"
import { useEffect } from "react"

const usePopularMovies = ()=>{
   const dispatch = useDispatch()
   const getPopularMovies = async()=>{
    const data = await fetch(`${POPULAR_MOVIE_URL}`,options)
    const json = await data.json()
    // console.log(json);
    
    dispatch(popularMovie(json.results))
   }
   useEffect(()=>{
     getPopularMovies()
   },[])
}

export default usePopularMovies