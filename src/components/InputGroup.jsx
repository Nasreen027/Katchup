import { HStack, Icon, Input } from "@chakra-ui/react";
import { colors } from "../theme/colors";

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

export default InputGroup;
