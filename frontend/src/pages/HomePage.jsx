import React from "react";
import SideNav from "../features/layout/components/SideNav";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      {/* Navigation */}
      <SideNav />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, overflowY: "auto" }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#111827", mb: 0.5 }}>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: "#6b7280" }}>
                Welcome back, Brooklyn! Here's what's happening today.
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {/* Summary Cards */}
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: "16px", 
                    border: "1px solid #e5e7eb",
                    backgroundColor: "white"
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: "#6b7280", fontWeight: 600, mb: 1 }}>
                    Metric {item}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#111827" }}>
                    $24,500.00
                  </Typography>
                </Paper>
              </Grid>
            ))}

            {/* Performance Chart Placeholder */}
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: 400, 
                  borderRadius: "16px", 
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white"
                }}
              >
                <Typography sx={{ color: "#9ca3af" }}>Performance Chart Area</Typography>
              </Paper>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: 400, 
                  borderRadius: "16px", 
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white"
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Recent Activity
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box key={item} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4f46e5" }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Invoice #123{item} paid</Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>2 hours ago</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
