import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { customIcons } from "../theme/icons";
import { colors } from "../theme/colors";

function SearchBar() {
  return (
<>
<InputGroup
            height={10}
            width={300}
            backgroundColor={colors.bg.primary}
            borderRadius={50}
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
                icon={<customIcons.search fontSize={"25px"} />}
                mt={15}
              />
            </InputRightElement>
          </InputGroup>
</>
  );
}

export default SearchBar;