import { LOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        dispatch(removeUser());
        navigate("/");
      });
  };

  return (
    <div className="bg-gradient-to-b from-black flex justify-between absolute z-10 w-full">
      <img src={LOGO} alt="logo" className="w-52"></img>
      {user && (
        <div className="">
          <h1>{user.displayName}</h1>
          <button
            className="p-2 cursor-pointer bg-red-600 rounded-xl"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
