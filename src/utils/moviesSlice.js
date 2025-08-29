import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    trendingMovies: null,
    trailer: null,
    nowPlayingMovies: null,
    popularMovies: null,
  },
  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});


export const {addTrendingMovies , addTrailer , addNowPlayingMovies , addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;