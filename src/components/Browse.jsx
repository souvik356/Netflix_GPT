import { useSelector } from 'react-redux'
import useGetNowPlayingMovies from './customHooks/usegetNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from './customHooks/usePopularMovies'
import useGetTopRatedMovie from './customHooks/useGetTopRatedMovie'
import useGetUpcomingMovies from './customHooks/useGetUpcomingMovies'

const Browse = () => {
  useGetNowPlayingMovies()
  usePopularMovies()
  useGetTopRatedMovie()
  useGetUpcomingMovies()
  return (
    <div className=''>
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse