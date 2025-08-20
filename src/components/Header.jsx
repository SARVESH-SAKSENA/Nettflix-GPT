import { LOGO } from "../utils/constant";

const Header = () =>  {
    return (
      <div className="bg-gradient-to-b from-black absolute z-10 w-full">
        <img
          src={LOGO}
          alt="logo"
          className="w-52"
        ></img>
      </div>
    );
};
export default Header;