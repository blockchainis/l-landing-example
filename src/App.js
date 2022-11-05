import theme from "./theme";
import "@fontsource/nanum-gothic";

import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import HeroTwo from "@components/HeroTwo";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <HeroTwo />
    </ChakraProvider>
  );
}

export default App;
