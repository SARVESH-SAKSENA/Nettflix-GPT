import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies, addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlaying;
