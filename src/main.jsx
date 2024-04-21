import React from "react";
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {App} from "../src/components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import 'modern-normalize';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
