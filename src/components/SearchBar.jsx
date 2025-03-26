import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { customIcons } from "../theme/icons";
import { colors } from "../theme/colors";

function SearchBar() {
  return (
<>
<InputGroup
            height="2.68rem"
            width={300}
            backgroundColor={colors.bg.primary}
            borderRadius={50}
            // border={"1px solid white"}
            border={"2px solid #C0C0C0"}
          >
            <Input
              fontSize={15}
              pr="4.5rem"
              placeholder="Search"
              borderRadius={50}
              border={"none"}
              // p={25}
              backgroundColor={colors.bg.primary}
            />
            <InputRightElement width="4.5rem" h="1.75rem">
              <IconButton
                border={"none"}
                backgroundColor={"transparent"}
                display={{base:'none',md:'block'}}
                icon={<customIcons.search style={{fill:"white"}} fontSize={"25px"} />}
                mt={11}
              />
            </InputRightElement>
          </InputGroup>
</>
  );
}

export default SearchBar;