import { Typography, Box} from "@mui/material";
import website from "./config/website.json";
import SimpleBar from "simplebar-react";

export default function Menu() {
  const categories = [...new Set(website.Menu.map((item) => item.category))];
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
                        <Typography variant="child">{item.item}</Typography>
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
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . . . . . . . . .
                          . . . . . . . . . . . . . . . . . . . .
                        </Typography>
                        <Typography
                          sx={{ p: 0, ml: 1 }}
                          variant="body1"
                        >{`$${item.price}`}</Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="info" sx={{color: "tertiary.main"}}>
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
    </SimpleBar>
  );
}
