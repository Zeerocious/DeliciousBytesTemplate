import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(props) {
  const { website } = props;

  return (
      <AppBar sx={{ position: "relative" }} color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="header" component="h1">
            {website.Info[0].name}
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
