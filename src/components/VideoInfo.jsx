const VideoInfo = ({ title, overview }) => {
  return (
    <div className="w-screen text-white px-24 aspect-video absolute pt-[20%] bg-gradient-to-r from-black">
      <h1 className="text-6xl my-4 w-5/12">{title}</h1>
      <p className="text-base my-4 w-1/3">{overview}</p>
      <div className="flex">
        <button className="w-32  py-4 rounded-lg bg-gray-600">▶Play</button>
        <button className="w-32 mx-2  py-4 rounded-lg bg-gray-600">ℹMore Info</button>
      </div>
    </div>
  );
};

export default VideoInfo;
