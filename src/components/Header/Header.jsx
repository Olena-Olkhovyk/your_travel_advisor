import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, Toolbar, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ display: { xs: "none", md: "block" } }}>
          Travel Advisor
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              marginRight: "8px",
              typography: {
                xs: {
                  fontSize: "16px",
                },
                md: {
                  fontSize: "25px",
                },
              },
            }}
          >
            Explore new places
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
              marginRight: "16px",
              marginLeft: "0",
              width: "100%",
              "@media (min-width: 600px)": {
                marginLeft: "24px",
                width: "auto",
              },
            }}
          >
            <Box
              sx={{
                padding: "8px",
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search..."
              sx={{
                color: "inherit",
                padding: "8px 8px 8px 40px",
                width: "100%",
                transition: "width 300ms",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
