import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import config from "./config";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "#202020")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>{config.footer}</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"GitHub"} href={config.socials.github}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Facebook"} href={config.socials.facebook}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Twitter"} href={config.socials.twitter}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={config.socials.youtube}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Linkedin"} href={config.socials.linkedin}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={"Instagram"} href={config.socials.instagram}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
