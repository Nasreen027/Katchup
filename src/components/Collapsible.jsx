// import { Box, Collapse, Flex } from "@chakra-ui/react";
// import SearchBar from "./SearchBar";
// import { colors } from "../theme/colors";

// export const CollapsibleBasic = ({ isSearchBarOpen }) => {
//   console.log(isSearchBarOpen, 'isSearchBarOpen');
//   return (
//     <Flex flexDirection={'column'} color={colors?.text?.primary}>
//       <Box transitionDuration={20} mr={20}>
//         <Collapse in={isSearchBarOpen} animateOpacity>
//           <SearchBar />
//         </Collapse>
//       </Box>
//     </Flex>
//   );
// };
import { Box, Collapse, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { colors } from "../theme/colors";
import { useEffect } from "react";

export const CollapsibleBasic = ({ isSearchBarOpen }) => {
  useEffect(()=>{
    console.log("working");
  })
  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      right={0}
      bg={colors?.bg?.primary}
      zIndex={999}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Collapse in={isSearchBarOpen} animateOpacity>
        <Flex justifyContent="center" p={3}>
          <SearchBar />
        </Flex>
      </Collapse>
    </Box>
  );
};

