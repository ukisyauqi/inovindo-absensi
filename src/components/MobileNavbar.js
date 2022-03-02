import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Center,
  Tabs,
  TabList,
  Link,
  Tab,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useNavigate, useParams } from "react-router-dom";

export default function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const param = useParams();

  return (
    <>
      {/* <Text align="center">{param}</Text> */}
      <Center
        bg="green.400"
        w="40px"
        h="40px"
        rounded="lg"
        position="fixed"
        top="10px"
        left="10px"
      >
        <HamburgerIcon
          ref={btnRef}
          _hover={{ cursor: "pointer" }}
          onClick={onOpen}
          w={6}
          h={6}
          color="white"
        />
      </Center>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          maxW="135px"
          background="linear-gradient(120deg, rgba(61,176,107,1) 0%, rgba(61,162,176,1) 100%)"
          color="white"
        >
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <Tabs variant="unstyled">
              <TabList color="gray.700" color="white">
                <VStack pt="50px">
                  <Link to="dashboard">
                    <hr />
                    <Tab
                      py="10px"
                      onClick={() => {
                        navigate("/dashboard");
                        onClose();
                      }}
                      width="135px"
                    >
                      Dashboard
                    </Tab>
                  </Link>
                  <Link to="user-list">
                    <hr />
                    <Tab
                      py="10px"
                      onClick={() => {
                        navigate("/user-list");
                        onClose();
                      }}
                      width="135px"
                    >
                      User List
                    </Tab>
                  </Link>
                  <Link to="manage-users">
                    <hr />
                    <Tab
                      py="10px"
                      onClick={() => {
                        navigate("/manage-users");
                        onClose();
                      }}
                      width="135px"
                    >
                      Manage Users
                    </Tab>
                  </Link>
                  <Link to="settings">
                    <hr />
                    <Tab
                      py="10px"
                      onClick={() => {
                        navigate("/settings");
                        onClose();
                      }}
                      width="135px"
                    >
                      Settings
                    </Tab>
                    <hr />
                  </Link>
                </VStack>
              </TabList>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
