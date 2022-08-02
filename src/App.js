import { Typography, Box } from "@mui/material"

function App() {
  return (
    <Box sx= {{display: "flex", flexDirection: "column"}}>
      <Typography variant="header"> CONTACT US </Typography>
      <Typography variant="subheader"> DROP US A LINE AND WE'LL GET BACK TO YOU </Typography>
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