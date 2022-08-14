import {AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(props) {
  const {website} = props
    const displayDesktop = () => {
      return <Toolbar>{femmecubatorLogo}</Toolbar>;
    };
    const femmecubatorLogo = (
        <Typography  variant="header" component="h1">
          {website.Info[0].name}
        </Typography>
      );

    return (
        <header>
          <AppBar sx={{position: "relative"}}color= "primary" enableColorOnDark> {displayDesktop()}
          </AppBar>
        </header>
      );
}