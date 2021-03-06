import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./AppContext.js";
import { theme } from "./theme";
import coba from "./coba";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppContextProvider>
          <App/>
        </AppContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
