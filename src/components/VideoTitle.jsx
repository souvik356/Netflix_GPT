import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";


const VideoTitle = ({title,overview,movieId}) => {
    
  return (
    <div className='w-screen aspect-video absolute text-white pl-30 pt-[20%] bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-6 mb-6'>{overview}</p>
        <div className='flex items-center gap-4'>
            <button className='p-4 px-12 bg-gray-100/80 text-black hover:bg-gray-200/70  rounded-xl flex items-center gap-1'><FaPlay/> Play</button>
            <button className=' ml-4 p-4 px-12 bg-gray-800/70 hover:bg-gray-900 text-white rounded-xl flex items-center gap-1'><FaInfo /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle