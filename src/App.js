import React, { useEffect, useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { AppContext } from "./AppContext";


export default function App() {
  
  const { auth, currentUser, setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  useEffect(() => {
    if (currentUser === null) navigate("/login");
  }, [currentUser]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
