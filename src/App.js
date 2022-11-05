import theme from "./theme";
import Fonts from "./Fonts";
import "@fontsource/nanum-gothic";

import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import HeroTwo from "@components/HeroTwo";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import Pricing from "@components/Pricing";
import Footer from "@components/Footer";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Hero />
      <Features />
      <Statistics />
      <Pricing />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
