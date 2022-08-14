import {AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
    const displayDesktop = () => {
      return <Toolbar>{femmecubatorLogo}</Toolbar>;
    };
    const femmecubatorLogo = (
        <Typography sx={{p:6}} variant="header" component="h1">
          Femmecubator
        </Typography>
      );

    return (
        <header>
          <AppBar color= "test" enableColorOnDark> {displayDesktop()}
          </AppBar>
        </header>
      );
}