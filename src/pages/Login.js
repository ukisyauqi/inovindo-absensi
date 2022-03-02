import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  HStack,
  Spinner,
  useToast,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import bgGradient from "../assets/bgGradient.svg";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
  const { currentUser, signIn } = useContext(AppContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signIn(email, password);
      toast({
        position: "top",
        title: "Login Success",
        status: "success",
        duration: 2000,
      });
    } catch (error) {
      toast({
        position: "top",
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) navigate("/dashboard");
  }, [currentUser]);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      background="linear-gradient(120deg, rgba(61,176,107,1) 0%, rgba(61,162,176,1) 100%);"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p={8}
              backgroundColor="white"
              boxShadow="xl"
              rounded="xl"
            >
              <Heading
                color="green.500"
                fontWeight="medium"
                align="center"
                pb={2}
              >
                Log In
              </Heading>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right"></FormHelperText>
              </FormControl>
              <Button
                variant="solid"
                colorScheme="green"
                width="full"
                onClick={handleSubmit}
                isLoading={loading}
                rounded="md"
                background="linear-gradient(90deg, rgba(61,176,107,1) 0%, rgba(61,162,176,1) 100%);"
                shadow="lg"
                _hover={{
                  filter: "brightness(1.1)",
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
