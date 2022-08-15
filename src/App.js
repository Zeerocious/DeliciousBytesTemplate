import { styled } from "@mui/material";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Parent>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                <Header/>
                <Home/>
              </>
            }
          />
          <Route
                exact
                path="/menu"
                element={
                  <>
                    <Header/>
                    <Menu/>
                  </>
                }
          />
          <Route
                exact
                path="/contact"
                element={
                  <>
                    <Header/>
                    <ContactUs/>
                  </>
                }
          />
        </Routes>
      </Parent>
    </BrowserRouter>
  );
}

const Parent = styled((props) => <div {...props} />)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
