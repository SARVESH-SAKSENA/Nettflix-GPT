import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = (id) => {
     const dispatch = useDispatch();

     const getMovieTrailer = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
         API_OPTIONS
       );
       const videos = await data.json();
       console.log(videos);
       const trailers = videos.results.filter(
         (trailer) => trailer.name === "Official Trailer"
       );
       dispatch(addTrailer(trailers[0]));
       console.log(trailers);
     };

     useEffect(() => {
       getMovieTrailer();
     }, []);
}

export default useTrailer;