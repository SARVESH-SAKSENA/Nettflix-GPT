import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'Movies' ,
    initialState: {
        trendingMovies: null ,
        trailer: null , 
    } ,
    reducers:{
        addTrendingMovies: (state , action) =>{
            state.trendingMovies = action.payload;
        } ,
        addTrailer: (state , action) => {
            state.trailer = action.payload;
        }
    }
})


export const {addTrendingMovies , addTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;