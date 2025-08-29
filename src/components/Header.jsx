import { LOGO } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = 
    onAuthStateChanged(auth, (user) => {
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
