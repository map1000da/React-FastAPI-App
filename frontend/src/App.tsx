import React from "react";
import "./App.css";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./thema/thema";
import { Router } from "./router/router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
