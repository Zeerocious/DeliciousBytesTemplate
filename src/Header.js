import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import website from "./config/website.json";

export default function Header() {
  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Typography variant="h2">{website.Info[0].name}</Typography>
          <Box sx={{ display: "flex" }}>
            <Button href="/home" sx={{ mr: 1 }} size="large">
              <Typography sx={{color: "tertiary.main"}} variant="header">
                HOME
              </Typography>
            </Button>
            <Button href="/menu" sx={{ mr: 1 }} size="large">
              <Typography color="primary" variant="header">
                MENU
              </Typography>
            </Button>
            <Button href="/contact" sx={{ mr: 1 }} size="large">
              <Typography color="primary" variant="header">
                CONTACT US
              </Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
