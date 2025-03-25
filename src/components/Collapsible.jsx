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

export const CollapsibleBasic = ({ isSearchBarOpen }) => {
  return (
    <Box
      position="fixed"
      top="50px" /* Adjust this to match your navbar height */
      left={0}
      right={0}
      bg={colors?.bg?.primary}
      zIndex={999}
    >
      <Collapse in={isSearchBarOpen} animateOpacity>
        <Flex justifyContent="center" p={2}>
          <SearchBar />
        </Flex>
      </Collapse>
    </Box>
  );
};
