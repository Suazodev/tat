import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { mainStore } from "./app/core/store/mainStore.ts";
import "./index.css";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(mainStore);

const theme = createTheme({
  typography: {
    fontFamily: "Inter, roboto, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ad9859",
    },
    secondary: {
      main: "#ad9859",
    },
    background: {
      default: "#161616",
      paper: "#000000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={mainStore}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
