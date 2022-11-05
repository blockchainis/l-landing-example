import theme from "./theme";
import "@fontsource/nanum-gothic";

import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import HeroTwo from "@components/HeroTwo";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <HeroTwo />
      <Features />
      <Statistics />
    </ChakraProvider>
  );
}

export default App;
