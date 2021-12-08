import { Box, useColorModeValue } from "@chakra-ui/react";

import Head from "next/head";

import config from "./config";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children, hideNavbar }) {
  return (
    <>
      <Head>
        <title>{config.name}</title>
        <meta description={config.description} />
        <link rel="icon" href={config.logo} />
      </Head>
      <Box bg={useColorModeValue("white", "#242424")}>
        {!hideNavbar && <Navbar />}
        {children}
        <Footer />
        <ThemeToggle />
      </Box>
    </>
  );
}
