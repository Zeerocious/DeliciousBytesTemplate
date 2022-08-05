import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import site from "./website.json"
console.log(site)
function App() {
  const [phoneNumber, setPhoneNumber] = useState(() => {
    return site.ContactUs[0].tel;
  });
  const [email, setEmail] = useState(() => {
    return site.ContactUs[0].email;
  });
  const [firstOpen, setWeekdayStart] = useState(() => {
    return site.ContactUs[0].firstopen;
  });
  const [secondOpen, setWeekdayEnd] = useState(() => {
    return site.ContactUs[0].secondopen;
  })
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
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 1,
            maxWidth: 420,
            width: "100%",
            height: "100%",
            mt:2
          }}
        >
          <Typography variant="header"> CONTACT US </Typography>
          <Typography sx={{mt:2}} variant="subheader">
            Drop us a line and we'll get back to you
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 2,
              justifyContent: "space-around",
            }}
          >
            <TextField label="First Name" variant="standard"></TextField>
            <TextField label="Last Name" variant="standard"></TextField>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 2,
              justifyContent: "space-around",
            }}
          >
            <TextField required label="Email" variant="standard"></TextField>
            <TextField label="Subject" variant="standard"></TextField>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 2,
              justifyContent: "space-around",
              alignItems: "end",
            }}
          >
            <TextField
              sx={{ width: 270 }}
              multiline
              required
              rows={3}
              label="Leave us a message..."
              variant="standard"
            ></TextField>
            <Button sx={{ height: 50 }} variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 1,
            mt: 2
          }}
        >
          <Typography variant="header"> WE'RE OPEN! </Typography>
          <Box sx={{display: "flex", flexDirection: "column", mt: 8 }}>
            <Typography variant="info">
              {`${firstOpen}`}
            </Typography>
            <Typography variant="info">
              {`${secondOpen}`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 8 }}>
            <Typography variant="info">{`Tel: ${phoneNumber}`}</Typography>
            <Typography variant="info">{`Email: ${email}`}</Typography>
          </Box>
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
