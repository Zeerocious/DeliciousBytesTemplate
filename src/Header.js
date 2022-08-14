import {AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
    const displayDesktop = () => {
      return <Toolbar>{femmecubatorLogo}</Toolbar>;
    };
    const femmecubatorLogo = (
        <Typography  variant="header" component="h1">
          Femmecubator
        </Typography>
      );

    return (
        <header>
          <AppBar sx={{position: "relative"}}color= "primary" enableColorOnDark> {displayDesktop()}
          </AppBar>
        </header>
      );
}