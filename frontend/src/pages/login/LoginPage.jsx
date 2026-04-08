import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      className="h-screen w-screen flex flex-col items-center justify-center relative"
      sx={{
        /* Geometric faceted background like Zoho */
        background: `
          linear-gradient(135deg, #e8f0fe 0%, #f3f7f9 25%, #eef2f7 50%, #f3f7f9 75%, #e8f0fe 100%)
        `,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(60deg, transparent 40%, rgba(200,215,230,0.3) 40%, rgba(200,215,230,0.3) 41%, transparent 41%),
            linear-gradient(-60deg, transparent 40%, rgba(200,215,230,0.25) 40%, rgba(200,215,230,0.25) 41%, transparent 41%),
            linear-gradient(120deg, transparent 55%, rgba(190,210,230,0.2) 55%, rgba(190,210,230,0.2) 56%, transparent 56%),
            linear-gradient(-120deg, transparent 55%, rgba(190,210,230,0.2) 55%, rgba(190,210,230,0.2) 56%, transparent 56%),
            linear-gradient(30deg, transparent 70%, rgba(205,220,235,0.15) 70%, rgba(205,220,235,0.15) 71%, transparent 71%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      {/* ─── Main Card ─── */}
      <Box
        className="flex w-full relative z-10"
        sx={{
          maxWidth: { xs: "100%", sm: "460px", md: "890px" },
          minHeight: { xs: "100vh", sm: "auto", md: "560px" },
          backgroundColor: "#fff",
          borderRadius: "6px",
          boxShadow: "0 2px 30px rgba(204,204,204,0.4)",
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
          my: { xs: 4, md: 0 },
          transition: "all 0.3s ease",
        }}
      >
        {/* ═══════════ LEFT PANE — Sign‑in Form ═══════════ */}
        <Box
          className="flex flex-col justify-center"
          sx={{
            flex: { xs: "1 1 auto", md: "0 0 55%" },
            px: { xs: 3, sm: 5, md: 6 },
            py: { xs: 4, sm: 5 },
          }}
        >
          {/* Sign in heading */}
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "24px" },
              fontWeight: 500,
              color: "#000",
              lineHeight: 1.2,
              mb: 0.5,
              fontFamily: "'Georgia', serif",
            }}
          >
            Sign in
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              mb: 4,
              fontFamily: "'Georgia', serif",
            }}
          >
            to access Forms
          </Typography>

          {/* Email input */}
          <Box
            sx={{
              border: "0.8px solid #E4E4E4",
              borderRadius: "2px",
              backgroundColor: "#F8F8F8",
              mb: 2.5,
              transition: "border-color 0.2s, box-shadow 0.2s",
              "&:focus-within": {
                borderColor: "#159AFF",
                boxShadow: "0 0 0 2px rgba(21,154,255,0.1)",
              },
            }}
          >
            <InputBase
              fullWidth
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                px: 1.5,
                py: 1.2,
                fontSize: "14px",
                color: "#333",
                fontFamily: "inherit",
                "& input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Password input */}
          <Box
            sx={{
              border: "0.8px solid #E4E4E4",
              borderRadius: "2px",
              backgroundColor: "#F8F8F8",
              mb: 2.5,
              transition: "border-color 0.2s, box-shadow 0.2s",
              "&:focus-within": {
                borderColor: "#159AFF",
                boxShadow: "0 0 0 2px rgba(21,154,255,0.1)",
              },
            }}
          >
            <InputBase
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end" sx={{ mr: 1 }}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
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
              sx={{
                pl: 1.5,
                py: 1.2,
                fontSize: "14px",
                color: "#333",
                fontFamily: "inherit",
                "& input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Login button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#159AFF",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "15px",
              py: 1.3,
              borderRadius: "4px",
              boxShadow: "none",
              mb: 1,
              "&:hover": {
                backgroundColor: "#0D8AEC",
                boxShadow: "0 4px 16px rgba(21,154,255,0.3)",
              },
            }}
          >
            Login
          </Button>

          {/* Sign up link */}
          <Box className="">
            <Typography sx={{ fontSize: "13px", color: "#555" }}>
              Don't have a Zoho account?{" "}
              <Typography
                component="a"
                href="#"
                sx={{
                  fontSize: "13px",
                  color: "#159AFF",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Sign up now
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* ═══════════ VERTICAL DIVIDER ═══════════ */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            borderColor: "#ECECEC",
          }}
        />

        {/* ═══════════ RIGHT PANE — Illustration ═══════════ */}
        <Box
          className="flex flex-col items-center justify-center text-center"
          sx={{
            display: { xs: "none", md: "flex" },
            flex: { xs: "1 1 auto", md: "0 0 45%" },
            px: { xs: 3, sm: 4 },
            py: { xs: 4, sm: 5 },
            backgroundColor: "#FAFBFC",
          }}
        >
          Right side
        </Box>
      </Box>

      {/* ─── Footer ─── */}
      {/* <Typography
        className="relative z-10"
        sx={{
          mt: 4,
          mb: 2,
          fontSize: "13px",
          color: "#727272",
          textAlign: "center",
        }}
      >
        © 2026, XYZ Corporation Pvt. Ltd. All Rights Reserved.
      </Typography> */}
    </Box>
  );
}
