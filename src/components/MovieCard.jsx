import { IMG_URL } from "../utils/constant"

const MovieCard = ({movie}) => {
    return (
      <div className="w-48 p-4">
        <img alt={movie.title} src={IMG_URL + movie.poster_path} />
      </div>
    );
}

export default MovieCard;