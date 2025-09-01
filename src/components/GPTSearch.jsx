import { LOGIN_BG } from "../utils/constant"
import GPTSuggestion from "./GPTSuggestion";
import SearchBox from "./SearchBox";

const GPTSearch = () => {
    return (
      <div>
        <div>
          <img alt="BG" src={LOGIN_BG} className="-z-10 absolute h-screen w-screen" />
        </div>
        <SearchBox />
        <GPTSuggestion />
      </div>
    );
}

export default GPTSearch;