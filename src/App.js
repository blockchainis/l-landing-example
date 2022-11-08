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
import useNavObserver from "./hooks/useNavObserver";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const handleVisible = (number) => () => {
    setNumber(number);
  };
  const heroRef = useNavObserver(handleVisible(0));
  const featuresRef = useNavObserver(handleVisible(1));
  const statisticsRef = useNavObserver(handleVisible(2));
  const pricingRef = useNavObserver(handleVisible(3));
  const heroTwoRef = useNavObserver(handleVisible(4));
  const handleShowSection = (index) => {
    const refs = [heroRef, featuresRef, statisticsRef, pricingRef, heroTwoRef];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar number={number} onShowSection={handleShowSection} />
      <Hero ref={heroRef} />
      <Features ref={featuresRef} />
      <Statistics ref={statisticsRef} />
      <Pricing ref={pricingRef} />
      <HeroTwo ref={heroTwoRef} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
