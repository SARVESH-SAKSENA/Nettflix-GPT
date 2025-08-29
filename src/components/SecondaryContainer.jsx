import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
//   console.log(movies.trendingMovies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-36 z-20 relative">
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
