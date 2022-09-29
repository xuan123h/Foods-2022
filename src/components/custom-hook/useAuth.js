import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // console.log(currentUser);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return {
    currentUser,
  };
};
export default useAuth;
