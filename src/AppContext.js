import { createContext, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCPvDWeM9701LhMLLJk7SUA3M1AAXZPXpo",
    authDomain: "absensi-inovindo.firebaseapp.com",
    projectId: "absensi-inovindo",
    storageBucket: "absensi-inovindo.appspot.com",
    messagingSenderId: "1005622228821",
    appId: "1:1005622228821:web:5e83af3841076766ef61dc",
  };
  initializeApp(firebaseConfig);

  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState(false);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signin success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => console.log("Log Out Success"))
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        auth,
        currentUser,
        setCurrentUser,
        signIn,
        logout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
