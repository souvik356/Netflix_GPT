import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        movieList : null,
        trailerVideo : null
    },
    reducers : {
        addMovie: (state,action)=>{
            state.movieList = action.payload
        },
        trailerInfo : (state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addMovie,trailerInfo} = movieSlice.actions
export default movieSlice.reducer