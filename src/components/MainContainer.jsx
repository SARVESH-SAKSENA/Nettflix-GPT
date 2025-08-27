import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";

const MainContainer = () => {
    
    const movies = useSelector((store) => store.movies.trendingMovies);
    if(!movies) return ;
    const {id , title , overview} = movies[3];
    // console.log(id + title + overview);
    return (<div>
        <VideoInfo title={title} overview={overview} />
        <VideoBackground id={id} />
    </div>)
}

export default MainContainer;