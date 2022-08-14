import { Typography, Box, TextField, Button,} from "@mui/material";
import website from "./config/website.json";
import Header from './Header';

function App() {

  const categories = [...new Set(website.Menu.map((item) => item.category))];
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
      <Header website={website}/>
      <Box sx={{ overflowY: "auto" }}>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
            width: "100%",
          }}
        >
          {categories.map((category) => {
            const itemsInCategory = website.Menu.filter(
              (item) => item.category === category
            );
            return (
              <Box
                key={category}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 900,
                }}
              >
                <Typography variant="parent">{category}</Typography>
                {itemsInCategory.map((item) => {
                  return (
                    <Box key={item.item}>
                      <Box sx={{ p: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "baseline" }}>
                          <Typography sx={{ p: 0 }} variant="child">
                            {item.starter}
                          </Typography>
                          <Typography variant="child">
                            {item.item}
                          </Typography>
                          <Typography
                            sx={{
                              p: 0,
                              m: 0,
                              flex: 1,
                              textOverflow: "clip",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . .
                            . .
                          </Typography>
                          <Typography
                            sx={{ p: 0, ml: 1 }}
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
            <Typography variant="parent"> CONTACT US </Typography>
            <Typography sx={{ mt: 2 }} variant="child">
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
            <Typography variant="parent"> WE'RE OPEN! </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 8 }}>
              <Typography variant="info">{`${website.ContactUs[0].firstopen}`}</Typography>
              <Typography variant="info">{`${website.ContactUs[0].secondopen}`}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 8 }}>
              <Typography variant="info">{`Tel: ${website.ContactUs[0].tel}`}</Typography>
              <Typography variant="info">{`Email: ${website.ContactUs[0].email}`}</Typography>
            </Box>
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
