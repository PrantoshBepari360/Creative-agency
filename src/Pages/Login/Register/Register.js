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
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import register from "../../../images/login.jpg";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.Repassword) {
      alert("login password didn't match");
      return;
    }
    registerUser(registerData.email, registerData.password, registerData.name, navigate);
    e.preventDefault();
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h2>Register</h2>
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  name="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  name="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  name="Your Password"
                  name="password"
                  type="password"
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-basic"
                  name="Retype Your Password"
                  name="Repassword"
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
                  Register
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button>Already Registered? Please Login</Button>
            </Link>
            <br />
            {user.email && (
              <Alert severity="success">User Created successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "80%" }} src={register} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
