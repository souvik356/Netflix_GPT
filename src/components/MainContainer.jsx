import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieData = useSelector((state) => state?.movie?.movieList);
//   console.log("movieData", movieData);
  if (movieData === null) return;
  const movie = movieData[0];
//   console.log("movie", movie);
  const { title, overview,id } = movie;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  );
};

export default MainContainer;
