import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {

  const gptSearch = useSelector((store) => store.gpt.showGPT);
  // console.log(gptSearch);
  useTrendingMovies();
  useNowPlaying();
  usePopularMovies();

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
