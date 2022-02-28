import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Dashboard() {
  const { logout } = useContext(AppContext);

  return (
    <>
      
      <Button onClick={logout}>Logout</Button>
    </>
  );
}
