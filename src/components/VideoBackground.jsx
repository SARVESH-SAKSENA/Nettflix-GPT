import {  useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({id}) => {

    const trailer = useSelector((store) => store?.movies?.trailer)

    // console.log(trailer);

    useTrailer(id);


    return (
      <div className="flex flex-nowrap">
        <iframe
          className="w-screen aspect-video -mt-12"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?&autoplay=1&mute=1&showinfo=1&playlist="+trailer?.key+"&loop=1&controls=0&autohide=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    );
}

export default VideoBackground;