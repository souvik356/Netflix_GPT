import { useSelector } from 'react-redux'
import useGetNowPlayingMovies from './customHooks/usegetNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useGetNowPlayingMovies()
  return (
    <div className=''>
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse