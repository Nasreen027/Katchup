import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.const";
import { CustomLogo } from "../../App";
import { colors } from "../../theme/colors";

function ClientHeader() {
  return (
    <>
      <Flex
        color={colors.text.primary}
        position={"relative"}
        style={{ top: 7 }}
        borderBottom={'1px solid #C0C0C0'}
        p={3}
        fontSize={18}
      >
        <Flex flexGrow={1}>
          <CustomLogo>Aurora</CustomLogo>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={230}>
          <NavLink to={UnAuthenticatedRoutesNames.About}>About us</NavLink>
          <Center height="40px">
            <Box
              w="2px"
              h="100%"
              bgGradient={colors.bg.accent}
            />
          </Center>
          <NavLink to={UnAuthenticatedRoutesNames.Register}>Write</NavLink>
          <Center height="40px">
          <Box
              w="2px"
              h="100%"
              bgGradient={colors.bg.accent}
            />
          </Center>
          <NavLink to={UnAuthenticatedRoutesNames.Login}>Sign in</NavLink>
        </Flex>
      </Flex>
    </>
  );
}

export default ClientHeader;
