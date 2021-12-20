import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.jpg";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWidthGoogle } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWidthGoogle();
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h2>Login</h2>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  label="Your Password"
                  name="password"
                  type="password"
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
                <br />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button>New User? Please Register</Button>
            </Link>
            <br />
            <Button onClick={handleGoogleSignIn} variant="contained">
              Google SignIn
            </Button>
            <br /> <br />
            {user.email && (
              <Alert severity="success">User Login successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "80%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
