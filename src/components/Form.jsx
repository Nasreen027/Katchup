import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  VStack,
  Divider,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { customIcons } from "../theme/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthenticatedRoutesNames, UnAuthenticatedRoutesNames } from "../utilities/util.const";
import { useFirebase } from "../context/Firebase";
import InputGroup from "./InputGroup";

 // const signInWithGoogle = async () => {
  //   const result = await signInWithPopup(auth, googleProvider);
  //   setToken(result.user.refreshToken);
  //   console.log('token',result.user.refreshToken)
  // };

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const FirebaseContext = useFirebase();
  useEffect(() => {
    const getPath = location.pathname;
    if (getPath === UnAuthenticatedRoutesNames.Register) {
      setIsSignup(true);
      // console.log(isSignup, "isSignup");
    } else {
      setIsSignup(false);
    }
  }, [location.pathname]);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const showToast = (title, description, status) => {
    const bgColor = status === 'success' ? 'green.500' : 'red.500';
    toast({
      title,
      description,
      status,
      bg: bgColor || colors.bg.accent,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        bg: bgColor,
      },
    });
  };

  const handleGoogleSignIn = () => {
    FirebaseContext.signInWithGoogle()
      .then((user) => {
        // console.log(user,'user');
        showToast(
          "Logged in",
          `Welcome ${user.displayName}`,
          "success",
        );
      })
      .catch((err) => {
        showToast(
          "Error",
          "Google Sign-In failed. Please try again.",
          "error",
        );
        console.error(err);
      });
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
      // console.log(email, "email", password, "password");
      const authAction = isSignup
        ? FirebaseContext.signupUserWithEmailAndPassword
        : FirebaseContext.signInUserWithEmailAndPassword;

      authAction(email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          showToast(
            isSignup ? "Account created" : "Logged in",
            isSignup
              ? "Account has been Created Successfully!"
              : "Successfully Logged in",
            "success",
          );
          navigate(AuthenticatedRoutesNames?.Home)

        })
        .catch((err) => {
          setEmail("");
          setPassword("");
          showToast(
            "Error",
            "Authentication failed. Please try again.",
            "error",
          );
          console.error(err);
        });
    }
  };

  return (
    <>
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
            {isSignup ? "Join Aurora" : "Welcome Back"}
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
                <Text
                  fontWeight={"bold"}
                  color="red.500"
                  fontSize="sm"
                  textAlign="left"
                  w="full"
                >
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
                <Text
                  fontWeight={"bold"}
                  color="red.500"
                  fontSize="sm"
                  textAlign="left"
                  w="full"
                >
                  {passwordError}
                </Text>
              )}
            </VStack>
            <Button
              borderRadius={50}
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

          <Divider my={2} borderColor={colors.text.secondary} />

          <Text textAlign="center" color={colors.text.primary}>
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <Link
              // mb={2}
              to={
                isSignup
                  ? UnAuthenticatedRoutesNames.Login
                  : UnAuthenticatedRoutesNames.Register
              }
              fontWeight={"bold"}
              as="span"
              color={colors.bg.accent}
              cursor="pointer"
            >
              {isSignup ? "Login" : "Create one"}
            </Link>
            <br />
            <span> OR</span>
          </Text>

          <Button
            mt={2}
            w="full"
            size="lg"
            // colorScheme="teal"
            color={colors.bg.accent}
            borderRadius={50}
            onClick={handleGoogleSignIn}
            leftIcon={<Icon as={customIcons.google} />}
          >
            Sign in with Google
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Form;
