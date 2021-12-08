import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { extendTheme } from "@chakra-ui/react";

export default function Root({ Component, pageProps }) {
  const theme = extendTheme({
    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
    },
  });

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}