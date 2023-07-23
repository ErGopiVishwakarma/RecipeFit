import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
//import { Provider } from "react-redux";
//import { store } from "./Redux/Store";
import CustomeTheme from "./Styles/Theme";
import { ContextProvider } from "./Redux/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={CustomeTheme}>
    {/* <Provider store={store}> */}
    <ContextProvider>
      <BrowserRouter scrollRestoration="manual">
        <App />
      </BrowserRouter>
    </ContextProvider>
    {/* </Provider> */}
  </ChakraProvider>
);

reportWebVitals();
