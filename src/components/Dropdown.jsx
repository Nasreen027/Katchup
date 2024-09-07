import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, MenuDivider } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

const Dropdown = () => {
  return (
    <Menu>
      <MenuButton as={Button}
    //    rightIcon={<ChevronDownIcon />}
        colorScheme="brown">
        Settings
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
