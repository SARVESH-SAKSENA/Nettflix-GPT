import { LOGO, SUPPORTED_LANG } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGPT } from "../utils/gptSlice";
import { changeLang } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  }

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  const handleGgtToggle = () => {
    dispatch(toggleGPT());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // console.log("login");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // console.log("logout");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black flex justify-between absolute z-10 w-full">
      <img src={LOGO} alt="logo" className="w-52"></img>
      {user && (
        <div className="">
          <select onChange={handleLangChange} className="m-4 p-2 rounded-md bg-black text-white">
            {SUPPORTED_LANG.map((lang) => (
              <option value={lang.identifier} key={lang.identifier} className="hover:bg-red-600">
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="bg-red-600 rounded-md p-2"
            onClick={handleGgtToggle}
          >
            SearchGPT
          </button>
          <button
            className="p-2 cursor-pointer  m-4  bg-red-600 rounded-md"
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
