import React from 'react'
import { MOVIE_IMAGE_URL } from '../utills/Constants';

const MovieCard = ({data}) => {
    // console.log(data);
    const { poster_path } =data
  return (
    <div>
        <div className='w-44 '>
            <img src={`${MOVIE_IMAGE_URL}${poster_path}`} />
        </div>
    </div>
  )
}

export default MovieCard