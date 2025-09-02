export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJlMGE0N2Q5ZTUxYWM2YTUwNmFmZjljNDdhZDdiMiIsIm5iZiI6MTc1NjEyMTE0MS40MjUsInN1YiI6IjY4YWM0ODM1NGY0NTdjMjc0ODQ0OTE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ra1n4Os-vaBe8YpGB21Zis_Ll3kg0XPjmx1eDbNc1UU",
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];


export const GEMINI_KEY = "AIzaSyBD1aDGw1Q96aJVHxzgDjeRbs819mSa9X0";  

// "you are a movie suggesting system and give me the names of 5 movies according to the input. Give only the names of movie in an array",


// Trakt fetching logic if tmdb does'nt work
// const fetchTrendingMovies = async () => {
//   const response = await fetch("https://api.trakt.tv/movies/trending", {
//     headers: {
//       "Content-Type": "application/json",
//       "trakt-api-version": "2",
//       "trakt-api-key":
//         "071ff1a644d84ee605f275aabf44910b1b2e59c272246d82f0d36726ccf4908b", // Replace with your client id
//     },
//   });

//   const data = await response.json();
//   console.log(data);
// };

// const fetchOMDb = async (imdbId) => {
//   const response = await fetch(
//     `https://www.omdbapi.com/?i=tt16311594&apikey=5257193f`
//   );
//   const data = await response.json();
//   console.log(data);
// };

// useEffect(() => {
//   fetchTrendingMovies();
//   fetchOMDb();
// }, []);
