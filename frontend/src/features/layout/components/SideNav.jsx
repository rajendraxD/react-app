import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Badge,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Inbox as InboxIcon,
  NotificationsOutlined as NotificationsIcon,
  GridView as DashboardIcon,
  BarChart as AnalyticsIcon,
  Repeat as ReportingIcon,
  DescriptionOutlined as OrderIcon,
  ReceiptOutlined as InvoiceIcon,
  Business as ManufacturesIcon,
  DeleteOutline as TrashIcon,
  SettingsOutlined as PreferencesIcon,
  Brightness4Outlined as DarkModeIcon,
  PaletteOutlined as ThemesIcon,
  HelpOutline as HelpIcon,
  KeyboardCommandKey as CommandIcon,
  ElectricBolt as BoltIcon,
  ViewSidebar as SidebarIcon,
  AutoAwesome as SparkleIcon,
  UnfoldMore as SelectorIcon,
} from "@mui/icons-material";

const SideNav = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f3f4f6" }}>
      {/* Main Sidebar (Expanded Panel) */}
      <Box
        sx={{
          width: 256,
          backgroundColor: "white",
          borderRight: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          px: 2,
          py: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              backgroundColor: "#4f46e5",
              color: "white",
              borderRadius: "8px",
              p: 0.5,
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SparkleIcon fontSize="small" />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#1f2937",
              flex: 1,
            }}
          >
            Pointsale
          </Typography>
          <IconButton size="small">
            <SidebarIcon
              sx={{
                color: "#9ca3af",
                transform: "rotate(180deg)",
                fontSize: 20,
              }}
            />
          </IconButton>
        </Box>

        {/* Quick Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            px: 1,
            py: 0.8,
            mb: 2.5,
          }}
        >
          <SearchIcon sx={{ color: "#9ca3af", fontSize: 20, mr: 1 }} />
          <InputBase
            placeholder="Quick search"
            sx={{ fontSize: "0.9rem", flex: 1 }}
          />
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            pr: 0.5,
            "&::-webkit-scrollbar": { width: 4 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#f3f4f6",
              borderRadius: 4,
            },
          }}
        >
          {/* Menu Section */}
          {/* <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#9ca3af",
              mb: 1,
              px: 1,
              mt: 1,
            }}
          >
            Menu
          </Typography> */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.8,
                mb: 0.5,
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
            >
              <DashboardIcon sx={{ color: "#111827", fontSize: 20, mr: 1.5 }} />
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827" }}
              >
                Dashboard
              </Typography>
            </Box>
            {[
              { icon: <AnalyticsIcon />, label: "Product analytics" },
              { icon: <ReportingIcon />, label: "Reporting" },
              { icon: <OrderIcon />, label: "Order summary" },
              { icon: <InvoiceIcon />, label: "Invoices" },
              { icon: <ManufacturesIcon />, label: "Manufactures" },
              { icon: <TrashIcon />, label: "Trash" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  py: 0.8,
                  mb: 0.5,
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f9fafb" },
                }}
              >
                <Box
                  sx={{
                    color: "#4b5563",
                    display: "flex",
                    alignItems: "center",
                    mr: 1.5,
                    "& svg": { fontSize: 20 },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{ fontSize: "0.9rem", fontWeight: 500, color: "#4b5563" }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Footer (Always at the end) */}
        <Box sx={{ mt: "auto", pt: 2 }}>
          <Divider sx={{ mb: 2, borderColor: "#f3f4f6" }} />
          <Box sx={{ mb: 2 }}>
            {[
              { icon: <PreferencesIcon />, label: "Preferences" },
              { icon: <DarkModeIcon />, label: "Dark mode" },
              { icon: <ThemesIcon />, label: "Themes" },
              { icon: <HelpIcon />, label: "Help" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  py: 0.8,
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f9fafb" },
                }}
              >
                <Box
                  sx={{
                    color: "#4b5563",
                    display: "flex",
                    alignItems: "center",
                    mr: 1.5,
                    "& svg": { fontSize: 20 },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{ fontSize: "0.9rem", fontWeight: 500, color: "#4b5563" }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderRadius: "12px",
              p: 1,
              cursor: "pointer",
              border: "1px solid #f3f4f6",
            }}
          >
            <Avatar
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 36, height: 36, mr: 1.5 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                }}
              >
                Brooklyn
              </Typography>
              <Typography
                sx={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 500 }}
              >
                Pro trial
              </Typography>
            </Box>
            <SelectorIcon sx={{ color: "#9ca3af", fontSize: 20 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
