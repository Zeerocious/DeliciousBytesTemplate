import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from "@mui/material";



let theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    header: {
      display: "block",
      padding: 6,
      fontWeight: 800,
      fontSize: "2rem"
    },
    item: {
      display: "block",
      padding: 2,
      fontWeight: 800,
      fontSize: "1rem"
    },
    description: {
      display: "block",
      fontWeight: 300,
      fontSize: "1rem"
    }
  }
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
