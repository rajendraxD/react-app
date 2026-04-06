import React from "react";
import { Box, Typography, Avatar, IconButton, InputBase } from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#1f2937" }}>
        Good Morning, Mahmud! 👋
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "12px",
            px: 2,
            py: 0.8,
            width: 300,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <SearchIcon sx={{ color: "#9ca3af", mr: 1 }} />
          <InputBase
            placeholder="Search courses or articles..."
            fullWidth
            sx={{ fontSize: "0.9rem" }}
          />
        </Box>
        <IconButton
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <NotificationsIcon sx={{ color: "#4b5563" }} />
        </IconButton>
        <Avatar
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ width: 42, height: 42 }}
        />
      </Box>
    </Box>
  );
}
