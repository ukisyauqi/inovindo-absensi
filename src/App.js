import React, { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AppContext } from "./AppContext";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import ManageUsers from "./pages/ManageUsers";
import Settings from "./pages/Settings";
import { Box } from "@chakra-ui/react";

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
        <Route
          path="/"
          element={
            <>
              {window.innerWidth > 480 ? <Navbar /> : <MobileNavbar />}
              <Outlet />
            </>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <Box margin={10}>
              Nothing Here <br />
              <Link to="/dashboard" style={{ color: "blue" }}>
                Go to Dashboard
              </Link>
            </Box>
          }
        />
      </Routes>
    </>
  );
}
