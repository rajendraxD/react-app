import React from "react";
import { Box } from "@mui/material";
import SideNav from "../features/layout/components/SideNav";
import DashboardPage from "./DashboardPage";
import Header from "../features/layout/components/Header";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Fixed height to prevent page scrolling
        overflow: "hidden", // Hide root scroll
        backgroundColor: "#f3f4f6", // Match sidenav/background
      }}
    >
      {/* Navigation (Fixed) */}
      <SideNav />

      {/* Main Content Area (Scrollable) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "#f9fafb", // Background for main area
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Header />
          <DashboardPage />
        </Box>
      </Box>
    </Box>
  );
}
