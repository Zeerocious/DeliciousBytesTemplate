import { Typography, Box, TextField} from "@mui/material";

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
      <Box
        sx={{ display: "flex", flexDirection: "column", padding: 1, maxWidth: 420, width: "100%", height: "100%"}}
      >
        <Typography variant="header"> CONTACT US </Typography>
        <Typography variant="subheader">
          DROP US A LINE AND WE'LL GET BACK TO YOU
        </Typography>
        <Box sx={{width: "100%", display: "flex", mt: 2, justifyContent: "space-around",}}>
          <TextField required label="First Name" variant="standard"></TextField>
          <TextField sx={{width: 170,}} required label="Last Name" variant="standard"></TextField>
        </Box>
      </Box>
      
    </Box>
  );
}

export default App;

/*
Contact us Section (no User input)                          
We're Open! (no UI)
Date/time Open (UI required)
Telephon/Email (UI required)

Date/time Open:

What time is Monday open = (UI string 11AM)
What time is Monday close = (UI string 10PM)
What time is Tuesday open = (UI string 11AM)
What time is Tuesday close = (UI string 10PM)
What time is Wednesday open = (UI string 11AM)
What time is Wednesday close = (UI string 10PM)
What time is Thursday open = (UI string 11AM)
What time is Thursday close = (UI string 10PM)
What time is Friday open = (UI string 11AM)
What time is Friday close = (UI string 10PM)
What time is Saturday open = (UI string 11AM)
What time is Saturday close = (UI string 12AM)
What time is Sunday open = (UI string 11AM)
What time is Sunday close = (UI string 12AM)

Telephone/Email:

What is the phone #: (UI string 510-709-9999)
What is the email address: (UI string support@deliciousbytes.io)


*/
