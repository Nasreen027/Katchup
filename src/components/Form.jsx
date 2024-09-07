import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { customIcons } from "../theme/icons";
import { Link, useLocation } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const location = useLocation(); // Move useLocation here

  useEffect(() => {
    const getPath = location.pathname;
    if (getPath === UnAuthenticatedRoutesNames.Register) {
      setIsSignup(true);
      console.log(isSignup, "isSignup");
    }
  }, [location.pathname, isSignup]); // Dependency should be location.pathname

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError("Email is required!");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least six characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log(email, "email", password, "password");
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={colors.bg.primary}>
      <Box
        w="100%"
        maxW="lg"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        position="relative"
        overflow="hidden"
      >
        <Heading mb={8} textAlign="center" color={colors.text.primary}>
          {isSignup ? "Sign Up" : "Login"}
        </Heading>
        <form onSubmit={FormSubmitHandler}>
          <VStack spacing={5}>
            <InputGroup
              icon={customIcons.envelope}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <Text fontWeight={"bold"} color="red.500" fontSize="sm" textAlign="left" w="full">
                {emailError}
              </Text>
            )}
            <InputGroup
              icon={customIcons.lock}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <Text fontWeight={"bold"} color="red.500" fontSize="sm" textAlign="left" w="full">
                {passwordError}
              </Text>
            )}
          </VStack>
          <Button
            mt={8}
            w="full"
            bg={colors.bg.accent}
            color={colors.text.secondary}
            _hover={{ bg: "rgba(102, 0, 51, 0.75)" }}
            size="lg"
            type="submit"
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <Divider my={8} borderColor={colors.text.secondary} />

        <Text textAlign="center" color={colors.text.primary}>
          {isSignup ? (
            "Already have an account? "
          ) : (
            "Don't have an account? "
          )}
          <Link
            to={isSignup ? UnAuthenticatedRoutesNames.Login : UnAuthenticatedRoutesNames.Register}
            fontWeight={"bold"}
            as="span"
            color={colors.bg.accent}
            cursor="pointer"
          >
            {isSignup ? "Login" : "Create one"}
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

// InputGroup Component for Icon and Input Field
const InputGroup = ({ icon, placeholder, type = "text", value, onChange }) => {
  return (
    <HStack
      spacing={3}
      w="full"
      bg={colors.text.secondary}
      p={3}
      borderRadius="md"
      boxShadow="sm"
    >
      <Icon as={icon} color={colors.bg.icon} />
      <Input
        type={type}
        placeholder={placeholder}
        variant="unstyled"
        bg="transparent"
        _placeholder={{ color: "gray.400" }}
        focusBorderColor={colors.bg.accent}
        value={value}
        onChange={onChange}
      />
    </HStack>
  );
};

export default Form;
