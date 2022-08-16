import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import website from "./config/website.json"
import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes,} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'simplebar/dist/simplebar.min.css';

//https://fonts.google.com/?preview.size=20



let theme = createTheme({
  components: {
    MuiInputBase: {
        styleOverrides: {
            input: {
                fontWeight: 300,
            }
        }
    },
  },
  
  palette: {
    primary: {
      main: '#AC7DE4',
      darker: '#140930',
    },
    secondary: {
      main: '#81C2B1',
      darker: '#123123'
    },
    mode: "dark",
  },
  typography: {
    header: {
      fontFamily: website.Font[0].family,
      fontSize: website.Font[0].size,
      fontWeight: website.Font[0].bold,
    },
    parent: {
      fontFamily: website.Font[1].family,
      fontSize: website.Font[1].size,
      fontWeight: website.Font[1].bold,
    },
    child: {
      fontFamily: website.Font[2].family,
      fontSize: website.Font[2].size,
      fontWeight: website.Font[2].bold,
    },
    info: {
      fontFamily: website.Font[3].family,
      fontSize: website.Font[3].size,
      fontWeight: website.Font[3].bold,
      marginTop: "0.5rem",
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
