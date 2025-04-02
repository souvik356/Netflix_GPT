import { useEffect } from "react"
import { options, TOP_RATED_MOVIE } from "../../utills/Constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovie } from "../../utills/movieSlice"

const useGetTopRatedMovie = ()=>{
    const dispatch = useDispatch()
   const getTopRatedMovie = async()=>{
      const data = await fetch(`${TOP_RATED_MOVIE}`,options)
      const json = await data.json()
    //   console.log('top rated',json.results);
      dispatch(addTopRatedMovie(json.results))
   }

   useEffect(()=>{
      getTopRatedMovie()
   },[])
}

export default useGetTopRatedMovie