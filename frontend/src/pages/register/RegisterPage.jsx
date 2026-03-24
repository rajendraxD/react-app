import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, WorkOutline } from "@mui/icons-material";

// ─── Brand colours (matches LoginPage) ──────────────────────────────────────
const BG_GRADIENT =
  "linear-gradient(135deg, #1a73e8 0%, #005bbf 55%, #003f8a 100%)";
const ACCENT = "#005bbf";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.password) {
      errs.password = "Password is required.";
    } else if (form.password.length < 8) {
      errs.password = "Minimum 8 characters.";
    }
    if (!form.confirmPassword) {
      errs.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    if (!agreedToTerms) errs.terms = "You must agree to the terms.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // TODO: dispatch register thunk
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: BG_GRADIENT,
        fontFamily: "'Outfit', sans-serif",
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        py: 4,
        gap: { xs: 0, md: 6 },
      }}
    >
      {/* ── Left: Brand ─────────────────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flex: 1,
          flexDirection: "column",
          color: "#fff",
          pr: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              border: "2px solid rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WorkOutline sx={{ color: "#fff", fontSize: 24 }} />
          </Box>
          <Typography
            sx={{ fontWeight: 700, fontSize: "1.3rem", color: "#fff" }}
          >
            SmartWorker
          </Typography>
        </Box>

        {/* Headline */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { md: "3rem", lg: "3.8rem" },
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            mb: 2,
            color: "#fff",
          }}
        >
          Join Us Today!
        </Typography>

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "rgba(255,255,255,0.9)",
            mb: 2.5,
          }}
        >
          The Premium Marketplace for Skilled Professionals!
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 360,
            lineHeight: 1.75,
          }}
        >
          From plumbers to electricians — SmartWorker helps skilled workers find
          customers and grow their careers with the power of AI.
        </Typography>
      </Box>

      {/* ── Right: Floating Card ─────────────────────────────────────────── */}
      <Box
        sx={{
          width: { xs: "100%", sm: 440 },
          maxWidth: 440,
          flexShrink: 0,
          bgcolor: "#fff",
          borderRadius: "24px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          px: { xs: 3, sm: 4.5 },
          py: 4,
          mx: { xs: "auto", md: 0 },
          overflowY: "auto",
          maxHeight: "96vh",
        }}
      >
        {/* Card heading */}
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 800,
            color: "#1a1a2e",
            mb: 0.5,
            letterSpacing: "-0.5px",
          }}
        >
          Create Account
        </Typography>
        <Typography
          align="center"
          sx={{ fontSize: "0.875rem", color: "#8a8aa0", mb: 2.5 }}
        >
          Join thousands of skilled professionals on SmartWorker.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <TextField
            id="register-fullname"
            name="fullName"
            placeholder="Full Name"
            type="text"
            autoComplete="name"
            fullWidth
            value={form.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={inputSx}
          />

          {/* Email */}
          <TextField
            id="register-email"
            name="email"
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={inputSx}
          />

          {/* Password */}
          <TextField
            id="register-password"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            fullWidth
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password || "Minimum 8 characters"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    id="toggle-password"
                    size="small"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={inputSx}
          />

          {/* Confirm Password */}
          <TextField
            id="register-confirm-password"
            name="confirmPassword"
            placeholder="Confirm Password"
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            fullWidth
            value={form.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    id="toggle-confirm-password"
                    size="small"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={showConfirm ? "Hide" : "Show"}
                  >
                    {showConfirm ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={inputSx}
          />

          {/* Terms */}
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  id="agree-terms"
                  size="small"
                  checked={agreedToTerms}
                  onChange={(e) => {
                    setAgreedToTerms(e.target.checked);
                    if (errors.terms) setErrors((p) => ({ ...p, terms: "" }));
                  }}
                  sx={{ color: ACCENT, "&.Mui-checked": { color: ACCENT } }}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.82rem", color: "#555" }}
                >
                  I agree to the{" "}
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ color: ACCENT, fontWeight: 600 }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ color: ACCENT, fontWeight: 600 }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
            {errors.terms && (
              <FormHelperText error sx={{ ml: 1.5 }}>
                {errors.terms}
              </FormHelperText>
            )}
          </Box>

          {/* Create Account button */}
          <Button
            id="create-account-button"
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "999px",
              textTransform: "none",
              background: `linear-gradient(135deg, #1a73e8, #005bbf)`,
              boxShadow: "0 6px 20px rgba(0,91,191,0.4)",
              "&:hover": {
                background: `linear-gradient(135deg, #005bbf, #003f8a)`,
                boxShadow: "0 8px 24px rgba(0,91,191,0.5)",
              },
              "&:disabled": { opacity: 0.7 },
              mb: 2,
            }}
          >
            {loading ? "Creating account…" : "Create Account"}
          </Button>

          {/* OR divider */}
          <Divider sx={{ mb: 2, fontSize: "0.8rem", color: "#c0c0d0" }}>
            OR
          </Divider>

          {/* Social buttons */}
          <Box sx={{ display: "flex", gap: 2, mb: 2.5 }}>
            <Button
              id="google-register"
              fullWidth
              variant="outlined"
              startIcon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              }
              sx={socialBtnSx}
            >
              Google
            </Button>
            <Button
              id="facebook-register"
              fullWidth
              variant="outlined"
              startIcon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.288h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              }
              sx={socialBtnSx}
            >
              Facebook
            </Button>
          </Box>

          {/* Login link */}
          <Typography
            align="center"
            sx={{ fontSize: "0.875rem", color: "#8a8aa0" }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              underline="hover"
              sx={{ color: ACCENT, fontWeight: 700 }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Input styles (matches LoginPage) ────────────────────────────────────────
const inputSx = {
  mb: 1.5,
  "& .MuiOutlinedInput-root": {
    borderRadius: "999px",
    bgcolor: "#f5f5fb",
    "& fieldset": { borderColor: "#e0e0f0" },
    "&:hover fieldset": { borderColor: "#b0b0d8" },
    "&.Mui-focused fieldset": { borderColor: "#005bbf", borderWidth: "2px" },
    "& input": { px: 2.5, py: 1.5, fontSize: "0.925rem", color: "#1a1a2e" },
    "& input::placeholder": { color: "#b0b0c8", opacity: 1 },
  },
  "& .MuiFormHelperText-root": { ml: 2 },
};

// ─── Social button styles ────────────────────────────────────────────────────
const socialBtnSx = {
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.875rem",
  py: 1.2,
  borderColor: "#e0e0f0",
  color: "#1a1a2e",
  bgcolor: "#fff",
  "&:hover": { borderColor: "#b0b0d8", bgcolor: "#f5f5fb" },
};
