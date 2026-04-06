import React from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Link, 
  TextField, 
  Typography, 
  Container 
} from "@mui/material";

const LoginForm = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: 4
        }}
      >
        <Box 
          component="form" 
          sx={{ 
            width: '100%', 
            maxWidth: 400,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 800, 
              mb: 8, // Increased spacing from title to input
              color: '#333333',
              letterSpacing: '0.05em'
            }}
          >
            LOGIN
          </Typography>

          <TextField
            fullWidth
            placeholder="Username"
            variant="outlined"
            autoComplete="username"
            sx={{
              backgroundColor: '#f2f2f2',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiInputBase-root': { borderRadius: 0 },
              '& .MuiInputBase-input': { 
                py: 2.2, 
                px: 2.5,
                fontSize: '15px'
              },
              mb: 2.5 // Increased spacing between inputs
            }}
          />

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
            sx={{
              backgroundColor: '#f2f2f2',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiInputBase-root': { borderRadius: 0 },
              '& .MuiInputBase-input': { 
                py: 2.2, 
                px: 2.5,
                fontSize: '15px'
              },
              mb: 1.5
            }}
          />

          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 7, // Increased spacing before the button
              mt: 1.5
            }}
          >
            <FormControlLabel
              control={
                <Checkbox 
                  size="small" 
                  sx={{ 
                    color: '#ccc',
                    '&.Mui-checked': { color: '#7b7dfb' }
                  }} 
                />
              }
              label={
                <Typography sx={{ fontSize: '13px', color: '#999999' }}>
                  Remember me
                </Typography>
              }
            />
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                fontSize: '13px', 
                color: '#999999',
                '&:hover': { color: '#7b7dfb' }
              }}
            >
              Forgot?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#7b7dfb',
              color: '#ffffff',
              py: 2,
              borderRadius: 0,
              fontWeight: 700,
              fontSize: '14px',
              '&:hover': {
                backgroundColor: '#6c6ee8',
              }
            }}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
