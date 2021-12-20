import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const drawerWidth = 240;
const Decoration = {
  textDecoration: 'none',
}

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <Box style={{textAlign: 'left', marginLeft: "15%"}}>
      <Toolbar />
      <Divider />
      <br />
      <Link style={Decoration} to="/home">
        <HomeOutlinedIcon />
        <Button color="inherit">Home</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard">
        <ShoppingCartOutlinedIcon/>
        <Button color="inherit">Order</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard/serviceList">
        <LocalLaundryServiceOutlinedIcon/>
        <Button color="inherit">Service List</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard/review">
        <ReviewsOutlinedIcon/>
        <Button color="inherit">Review</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard/servicelists">
      <LocalLaundryServiceOutlinedIcon/>
        <Button color="inherit">Service List</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard/addService">
        <AddOutlinedIcon/>
        <Button color="inherit">Add Service</Button>
      </Link>
      <br />
      <Link style={Decoration} to="/dashboard/makeAdmin">
        <AdminPanelSettingsOutlinedIcon/>
        <Button color="inherit">Make Admin</Button>
      </Link>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
