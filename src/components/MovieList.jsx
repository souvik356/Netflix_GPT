import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movieData}) => {
    
    if(movieData === null) return
  return (
    <div className='p-3'>
        <h1 className='text-2xl text-white font-semibold'>{title}</h1>
        <div className='flex items-center gap-2 overflow-x-scroll mt-4'>
            {movieData.map((data)=> <MovieCard key={data?.id} data={data}/>)}
        </div>
    </div>
  )
}

export default MovieList