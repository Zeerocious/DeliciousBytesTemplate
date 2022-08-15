import { Typography, Box, TextField, Button } from "@mui/material";
import website from "./config/website.json";
import SimpleBar from "simplebar-react";

export default function ContactUs() {
  return (
    <SimpleBar style={{ minHeight: 0, height: "100%" }}>
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
    </SimpleBar>
  );
}
