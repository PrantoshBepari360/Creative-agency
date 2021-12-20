import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Decoration = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '7px'
}

const Navigation = () => {
  const {user, logOut} = useAuth({});
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link style={Decoration} to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link style={Decoration} to="/portfolio">
            <Button color="inherit">Our Portfolio</Button>
          </Link>
          <Link style={Decoration} to="/team">
            <Button color="inherit">Our Team</Button>
          </Link>
          <Link style={Decoration} to="/contact">
            <Button color="inherit">Contact Us</Button>
          </Link>
          <Link style={Decoration} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">Logout</Button>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;