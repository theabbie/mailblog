import { Box, useColorModeValue } from "@chakra-ui/react";

import config from "./config";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children, hideNavbar }) {
  return (
    <>
      <Box bg={useColorModeValue("white", "#242424")}>
        {!hideNavbar && <Navbar />}
        {children}
        <Footer />
        <ThemeToggle />
      </Box>
    </>
  );
}
