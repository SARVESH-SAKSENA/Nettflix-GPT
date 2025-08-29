import MovieCard from "./MovieCard"

const MovieList = ({title , movies}) => {
    console.log(movies);
    return (
      <div className="">
        <h1 className="text-white p-2 font-bold text-3xl">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MovieList;