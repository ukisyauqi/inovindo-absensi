import React, { useContext } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { logout } = useContext(AppContext);
  return (
    <Flex justifyContent="space-around" alignItems="center">
      <Text>Logo</Text>
      <Tabs variant="unstyled">
        <TabList color="gray.700">
          <Link to="dashboard">
            <Tab
              _selected={{
                bg: "#E9F8F4",
              }}
              py="10px"
            >
              Dashboard
            </Tab>
          </Link>
          <Link to="user-list">
            <Tab
              _selected={{
                bg: "#E9F8F4",
              }}
              py="10px"
            >
              User List
            </Tab>
          </Link>
          <Link to="manage-users">
            <Tab
              _selected={{
                bg: "#E9F8F4",
              }}
              py="10px"
            >
              Manage Users
            </Tab>
          </Link>
          <Link to="settings">
            <Tab
              _selected={{
                bg: "#E9F8F4",
              }}
              py="10px"
            >
              Settings
            </Tab>
          </Link>
        </TabList>
      </Tabs>

      <Button variant="link"onClick={logout}>Logout</Button>
    </Flex>
  );
}
