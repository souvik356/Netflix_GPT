import { useDispatch } from "react-redux"
import { options, UPCOMING_MOVIES } from "../../utills/Constants"
import { addUpComingMovies } from "../../utills/movieSlice"
import { useEffect } from "react"

const useGetUpcomingMovies = ()=>{
    const dispatch = useDispatch()
   const getUpComingMovie = async()=>{
    const data = await fetch(`${UPCOMING_MOVIES}`,options)
    const json = await data.json()
    dispatch(addUpComingMovies(json.results))
   }

   useEffect(()=>{
      getUpComingMovie()
   },[])
}

export default useGetUpcomingMovies