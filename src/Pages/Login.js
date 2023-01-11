import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";

const theme = createTheme();

function ForgotPasswordModal({ isOpen, onClose }) {
  const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false);

  function handleForgotPasswordSubmit(event) {
    event.preventDefault();
    onClose();
    setIsNewPasswordModalOpen(true);
  }
  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleForgotPasswordSubmit}
      >
        <Card
          style={{
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow:
              "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
            padding: "16px",
            width: "84%",
            maxWidth: "440px",
            [theme.breakpoints.down("455")]: {
              width: "80%",
              maxWidth: "400px",
            },
          }}
        >
          <CardHeader title="Forgot Your Password Huh??" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Please enter your email address below and we will send you
              instructions on how to reset your password.
            </Typography>
            {/* Isi modal */}
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Box>
          </CardContent>
          <CardActions
            style={{
              [theme.breakpoints.down("455")]: {
                flexDirection: "column",
              },
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              href="/forgot"
              sx={{
                mt: 2,
                mb: 2,
                mr: 2,
                color: "white",
                backgroundColor: "#00B9AE",
                "&:hover": {
                  backgroundColor: "#00B9AE",
                },
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              fullWidth
              onClick={onClose}
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                color: "#00B9AE",
                backgroundColor: "white",
                border: "1px solid #00B9AE",
                "&:hover": { backgroundColor: "#00B9AE", color: "white" },
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Modal>
      <Modal
        open={isNewPasswordModalOpen}
        onClose={() => setIsNewPasswordModalOpen(false)}
      >
        <Card>
          <CardContent>
            <form>
              <TextField label="New Password" type="password" required />
              <TextField
                label="Confirm New Password"
                type="password"
                required
              />
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}
export default function Login() {
  // router
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              border: "1px solid black",
              borderRadius: "10px",
              p: 4,
            }}
          >
            {/* <Logo width="80" height="80" /> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 2, mb: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="jhondoe@email.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Link href="#" variant="body2" onClick={handleOpen}>
                Forgot password?
              </Link>
              <ForgotPasswordModal isOpen={isOpen} onClose={handleClose}/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "white",
                  background:
                    "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
