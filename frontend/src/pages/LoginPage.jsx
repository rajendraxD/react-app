import React, { useState, useCallback } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

/* ─── Design Tokens ─── */
const tokens = {
  bg: "#0d0f1a",
  cardBg: "rgba(22, 27, 51, 0.65)",
  cardBorder: "rgba(100, 110, 160, 0.25)",
  inputBg: "rgba(40, 45, 75, 0.55)",
  inputBorder: "rgba(100, 110, 160, 0.3)",
  inputText: "#c8cce0",
  placeholder: "rgba(180, 185, 210, 0.6)",
  accent: "#e84373",
  accentEnd: "#d63464",
  titleColor: "#e8eaf0",
  purpleGlow: "rgba(120, 40, 160, 0.25)",
};

/* ─── Reusable Styles ─── */
const inputSx = {
  width: "100%",
  backgroundColor: tokens.inputBg,
  border: `1px solid ${tokens.inputBorder}`,
  borderRadius: "10px",
  px: 2.5,
  py: 1.5,
  fontSize: "0.95rem",
  color: tokens.inputText,
  fontFamily: "'Outfit', sans-serif",
  letterSpacing: "0.3px",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    borderColor: "rgba(130, 140, 190, 0.45)",
  },
  "&.Mui-focused": {
    borderColor: tokens.accent,
    boxShadow: `0 0 0 2px rgba(232, 67, 115, 0.15)`,
  },
  "& input::placeholder": {
    color: tokens.placeholder,
    opacity: 1,
    fontFamily: "'Outfit', sans-serif",
  },
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(
    () => setShowPassword((prev) => !prev),
    []
  );

  return (
    <>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');`}</style>

      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `
            radial-gradient(ellipse 50% 60% at 10% 50%, ${tokens.purpleGlow}, transparent 70%),
            linear-gradient(160deg, #10132a 0%, ${tokens.bg} 40%, #0b0d18 100%)
          `,
          fontFamily: "'Outfit', sans-serif",
          p: 2,
        }}
      >
        {/* ── Glassmorphism Card ── */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            background: tokens.cardBg,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${tokens.cardBorder}`,
            borderRadius: "18px",
            px: { xs: 3.5, sm: 5 },
            py: { xs: 4.5, sm: 5.5 },
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.04)
            `,
          }}
        >
          {/* ── Title ── */}
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              sx={{
                color: tokens.titleColor,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "1.85rem",
                letterSpacing: "1.2px",
                mb: 1.2,
              }}
            >
              Login
            </Typography>
            <Box
              sx={{
                width: 36,
                height: 3,
                backgroundColor: tokens.accent,
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>

          {/* ── Username Field ── */}
          <Box sx={{ mb: 3 }}>
            <InputBase
              id="login-username"
              placeholder="Username"
              fullWidth
              sx={inputSx}
              inputProps={{ "aria-label": "Username" }}
            />
          </Box>

          {/* ── Password Field ── */}
          <Box sx={{ mb: 4.5 }}>
            <InputBase
              id="login-password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={inputSx}
              inputProps={{ "aria-label": "Password" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePassword}
                    edge="end"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    sx={{
                      color: tokens.placeholder,
                      mr: -0.5,
                      "&:hover": { color: tokens.inputText },
                    }}
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

          {/* ── Login Button ── */}
          <Button
            id="login-submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              background: `linear-gradient(135deg, ${tokens.accent} 0%, ${tokens.accentEnd} 100%)`,
              color: "#fff",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "0.8px",
              textTransform: "none",
              borderRadius: "10px",
              py: 1.6,
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(232, 67, 115, 0.3)",
              "&:hover": {
                background: `linear-gradient(135deg, #f04e80 0%, ${tokens.accent} 100%)`,
                boxShadow: "0 6px 28px rgba(232, 67, 115, 0.45)",
                transform: "translateY(-1px)",
              },
              "&:active": {
                transform: "translateY(0)",
                boxShadow: "0 2px 12px rgba(232, 67, 115, 0.25)",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}
