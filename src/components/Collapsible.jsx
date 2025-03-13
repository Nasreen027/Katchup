import { Box, Button, Collapse, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { customIcons } from "../theme/icons";
import { colors } from "../theme/colors";

export const CollapsibleBasic = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex flexDirection={'column'} color={colors?.text?.primary}>
      {/* <Button  mb={4}> */}
        <Icon mt={4} onClick={onToggle} fontSize={25} as={customIcons.search} />
      {/* </Button> */}
      <Collapse in={isOpen} animateOpacity>
          <SearchBar />
      </Collapse>
    </Flex>
  );
};
