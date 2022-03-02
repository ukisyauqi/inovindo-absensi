import { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();

  // state
  const [currentUser, setCurrentUser] = useState(false);

  // function
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast({
          position: "top",
          title: "Logout Success",
          status: "success",
          duration: 2000,
        });
      })
      .catch((error) => {
        toast({
          position: "top",
          title: "Logout Failed",
          description: error.message,
          status: "error",
          duration: 4000,
        });
      });
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
