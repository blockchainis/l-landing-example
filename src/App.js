import theme from "./theme";
import "@fontsource/nanum-gothic";

import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
    </ChakraProvider>
  );
}

export default App;
