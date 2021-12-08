import {
  Container,
  Heading,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import config from "./config";

export default function Navbar() {
  return (
    <Container
      maxW={"5xl"}
      color={useColorModeValue("#242424", "white")}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 28 }}
        pb={{ base: 10, md: 20 }}
      >
        <Image
          maxH="150px"
          w="200px"
          objectFit="cover"
          src={config.logo}
          alt="logo"
          filter={useColorModeValue(
            "invert(0%) brightness(100%)",
            "invert(100%) brightness(75%)"
          )}
        />
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {config.name}
        </Heading>
        <Text fontSize="17pt" color={"gray.500"} maxW={"3xl"}>
          {config.longDescription}
        </Text>
      </Stack>
    </Container>
  );
}
