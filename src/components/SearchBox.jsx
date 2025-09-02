import { useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef } from "react";
import ai from "../utils/geminiAi";

const SearchBox = () => {
  const langKey = useSelector((store) => store.lang.language);

  const gptSearchText = useRef(null);

  const handleGptSearch = async () => {
    console.log(gptSearchText.current.value);

    const query =
      "you are a movie suggesting system and give me the names of 5 movies according to the query:" +
      gptSearchText.current.value +
      " Give only the names of movies seperated with comma nothing else not even []";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });
    console.log(response.text);

    const movies = response.text.split(", ");
    console.log(movies);
  };

  return (
    <div className="pt-[15%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" rounded-md m-auto p-2 item-center w-7/12  bg-black flex justify-center"
      >
        <input
          type="text"
          ref={gptSearchText}
          placeholder={lang[langKey].placeholder}
          className="p-2 m-2 w-9/12 h-12 rounded-md"
        />
        <button
          className="p-2 m-2 bg-red-600 w-3/12 rounded-md"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
