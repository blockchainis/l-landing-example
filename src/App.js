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
import NavBar from "@components/NavBar";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
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
