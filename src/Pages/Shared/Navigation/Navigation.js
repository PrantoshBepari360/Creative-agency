import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { Divider, Drawer, List, ListItem, ListItemText, useTheme } from "@mui/material";
import logo from "../../../images/download.png";

const Navigation = () => {
  const {user, logOut} = useAuth({});

  const theme = useTheme();
  const useStyles  = makeStyles({
    navItem:{
      textDecoration: 'none',
      color: 'white',
      marginRight: '7px'
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#000",
    },
  });
  
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyles();

  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/">
              HOME
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/portfolio">
            OUR PORTFOLIO
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/team">
            OUR TEAM
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/contact">
            CONTACT US
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/dashboard">
            DASHBOARD
          </Link>
        </ListItem>
        <ListItem button>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          ) : (
            <NavLink className={mobileNavItem} to="/login">
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{width: "40px",marginTop: "8px"}} src={logo} alt="" />
          </Typography>
          <Box className={navItemContainer}>
          <Link className={navItem} to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className={navItem} to="/portfolio">
            <Button color="inherit">Our Portfolio</Button>
          </Link>
          <Link className={navItem} to="/team">
            <Button color="inherit">Our Team</Button>
          </Link>
          <Link className={navItem} to="/contact">
            <Button color="inherit">Contact Us</Button>
          </Link>
          <Link className={navItem} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">Logout</Button>
          ) : (
            <Link className={navItem} to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <React.Fragment>
    <Drawer open={state} onClose={() => setState(false)}>
      {list}
    </Drawer>
    </React.Fragment>
          </>
  );
};

export default Navigation;
