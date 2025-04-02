import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import useTrailerVideo from './customHooks/useTrailerVideo'

const VideoBackGround = ({movieId}) => {
  const trailer = useSelector(state => state.movie.trailerVideo)
  // console.log('trailer',trailer);
 
  useTrailerVideo(movieId)
  
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackGround