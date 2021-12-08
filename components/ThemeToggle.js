import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      bottom={25}
      right={25}
      zIndex={1}
      alignItems="center"
      justifyContent="center"
      bgColor={colorMode === "light" ? "gray.600" : "gray.200"}
      borderRadius="full"
      boxShadow="0 0 4px rgba(0, 0, 0, 0.25)"
      p={6}
      cursor="pointer"
      onClick={toggleColorMode}
    >
      <Icon
        as={colorMode === "light" ? BsSunFill : BsFillMoonFill}
        boxSize="2rem"
        color={colorMode === "light" ? "yellow.500" : "teal.500"}
      />
    </Flex>
  );
}
