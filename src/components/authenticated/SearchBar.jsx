import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { customIcons } from "../../theme/icons";

function SearchBar() {
  return (
<>
<InputGroup
            height={50}
            width={300}
            backgroundColor={colors.bg.primary}
            borderRadius={50}
          >
            <Input
              fontSize={20}
              pr="4.5rem"
              placeholder="Search"
              borderRadius={50}
              border={"none"}
              p={25}
              backgroundColor={colors.bg.primary}
            />
            <InputRightElement width="4.5rem" h="1.75rem">
              <IconButton
                border={"none"}
                backgroundColor={"transparent"}
                icon={<customIcons.search fontSize={"30px"} />}
                mt={23}
              />
            </InputRightElement>
          </InputGroup>
</>
  );
}

export default SearchBar;