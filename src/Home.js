import SimpleBar from "simplebar-react";
import { Box } from "@mui/material";
import website from "./config/website.json";

const domain = "http://drive.google.com/uc?export=view&id=";

export default function Home() {
  return (
    
    <SimpleBar style={{ minHeight: 0, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          width: "100%",
        }}
      >
        <img src= {domain +  website.Menu[0].image} alt=""/>
        
      </Box>
    </SimpleBar>
  );
}
