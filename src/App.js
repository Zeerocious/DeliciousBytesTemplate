import {Box} from "@mui/material";
import website from "./config/website.json";
import Header from "./Header";
import Menu from "./Menu";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header website={website} />
      <Box sx={{ overflowY: "auto" }}>
        <Menu website={website} />
        <ContactUs website={website} />
      </Box>
    </Box>
  );
}

export default App;
