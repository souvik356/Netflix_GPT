import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        movieList : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addMovie: (state,action)=>{
            state.movieList = action.payload
        },
        popularMovie: (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovie: (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies : (state,action)=>{
            state.upcomingMovies = action.payload
        },
        trailerInfo : (state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addMovie,trailerInfo,popularMovie,addTopRatedMovie,addUpComingMovies} = movieSlice.actions
export default movieSlice.reducer