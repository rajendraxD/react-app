import React from "react";
import SideNav from "../features/layout/components/SideNav";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Fixed height to prevent page scrolling
        overflow: "hidden", // Hide root scroll
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Navigation */}
      <SideNav />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100%", // Fill parent height
          overflowY: "auto", // Enable scrolling here
          p: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="xl">{/* Main */}</Container>
      </Box>
    </Box>
  );
}
