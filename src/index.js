import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes,} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let theme = createTheme({
  components: {
    MuiInputBase: {
        styleOverrides: {
            input: {
                fontWeight: 300,
            }
        }
    }
  },
  palette: {
    test: {
      main: '#400CCC',
      darker: '#140930',
    },
    mode: "dark",
  },
  typography: {
    header: {
      fontFamily: "sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    parent: {
      fontWeight: 700,
      fontSize: "2rem"
    },
    child: {
      fontWeight: 400,
    },
    info: {
      marginTop: "0.5rem",
      fontWeight: 300,
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
