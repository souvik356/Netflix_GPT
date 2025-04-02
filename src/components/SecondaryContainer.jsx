import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movieList = useSelector((state)=> state.movie.movieList)
  const popularMovieList = useSelector((state)=>state.movie.popularMovies)
  const topRatedMovie = useSelector((state)=> state.movie.topRatedMovies)
  const upComingMovie = useSelector((state)=> state.movie.upcomingMovies)
  console.log(upComingMovie);
  
  return (
    <div className='bg-black'>
      <MovieList title={'Now Playing'} movieData={movieList}/>
      <MovieList title={'Top Rated Movies'} movieData={topRatedMovie}/>
      <MovieList title={'Popular'} movieData={popularMovieList}/>
      <MovieList title={'Upcoming Movies'} movieData={upComingMovie}/>
      <MovieList title={'Horror'} movieData={movieList}/>
    </div>
  )
}

export default SecondaryContainer