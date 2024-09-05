import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginFormSubmitHandler = (e) => {
        e.preventDefault();
        if(!email|| !password){
            return
        }
        console.log(email, 'email', password, 'password');
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
                    Login
                </Heading>
                <form onSubmit={LoginFormSubmitHandler}>
                    <VStack spacing={5}>
                        <InputGroup
                            icon={customIcons.envelope}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputGroup
                            icon={customIcons.lock}
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
                        Login
                    </Button>
                </form>

                <Divider my={8} borderColor={colors.text.secondary} />

                <Text textAlign="center" color={colors.text.primary}>
                    Don't have an account?{" "}
                    <Link
                        to={UnAuthenticatedRoutesNames.Register}
                        fontWeight={"bold"}
                        as="span"
                        color={colors.bg.accent}
                        cursor="pointer"
                    >
                        Create one
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

export default Login;
