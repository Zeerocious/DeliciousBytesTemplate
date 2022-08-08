import { Typography, Box, TextField, Button } from "@mui/material";
import { display, maxWidth } from "@mui/system";
import { useState } from "react";
import website from "./website.json";

function App() {
  const [site, setSite] = useState(() => {
    return website;
  });

  const categories = [...new Set(site.Menu.map((item) => item.category))];

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
      <Box sx={{ overflowY: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
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
              mt: 2,
            }}
          >
            <Typography variant="header"> CONTACT US </Typography>
            <Typography sx={{ mt: 2 }} variant="subheader">
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
              mt: 2,
            }}
          >
            <Typography variant="header"> WE'RE OPEN! </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 8 }}>
              <Typography variant="info">{`${site.ContactUs[0].firstopen}`}</Typography>
              <Typography variant="info">{`${site.ContactUs[0].secondopen}`}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 8 }}>
              <Typography variant="info">{`Tel: ${site.ContactUs[0].tel}`}</Typography>
              <Typography variant="info">{`Email: ${site.ContactUs[0].email}`}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{display: "flex",
                flexDirection: "column",
                alignItems:"center",
                mt: 5,
                width: "100%"
                }}>          
          {categories.map((category) => {
            const itemsInCategory = site.Menu.filter(
              (item) => item.category === category
            );
            return (
              <Box sx={{ 
                display: "flex",
                flexDirection: "column",
                maxWidth: 1000
              }}>
                <Typography variant="header">{category}</Typography>
                {itemsInCategory.map((item) => {
                  return (
                    <Box>
                      <Box sx={{ p: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "baseline",}}>
                          <Typography sx={{ p: 0, mr: 1 }} variant="body1">
                            {item.item}
                          </Typography>
                          <Typography
                            sx={{ p: 0, m: 0, flex: 1, textOverflow: "clip" , overflow: "hidden", whiteSpace: "nowrap"}}>
                              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                            </Typography>
                          <Typography
                            sx={{ p: 0, ml:1 }}
                            variant="body1"
                          >{`$${item.price}`}</Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="textSecondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
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
