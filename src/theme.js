import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
  fonts: {
    body: `'Nanum Gothic', sans-serif`,
  },
});

export default theme;
