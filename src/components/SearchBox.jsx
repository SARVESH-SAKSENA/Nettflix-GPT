import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

const SearchBox = () => {

  const langKey = useSelector((store) => store.lang.language);
  return (
    <div className="pt-[15%]">
      <form onSubmit={(e) => e.preventDefault()} className=" rounded-md m-auto p-2 item-center w-7/12  bg-black flex justify-center">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-2 m-2 w-9/12 h-12 rounded-md"
        />
        <button className="p-2 m-2 bg-red-600 w-3/12 rounded-md">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default SearchBox;
