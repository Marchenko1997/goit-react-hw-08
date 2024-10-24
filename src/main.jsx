// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import "modern-normalize";
import Modal from "react-modal";
import { Box, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { App } from "../src/components/App.jsx";
import theme from "./themes.js"; 
import "./index.css";

const appElement = document.getElementById("root");
Modal.setAppElement(appElement);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {" "}
      <Box>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
