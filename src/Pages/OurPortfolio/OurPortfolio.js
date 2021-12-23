import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import portfolio from "../../images/portfolio/3d.png";
import portfolio2 from "../../images/portfolio/3d2.png";
import portfolio3 from "../../images/portfolio/3d3.png";
import portfolio4 from "../../images/portfolio/3d4.png";
import Review from './Review';

const image = {
  width: "80%",
}

const value = {
  fontSize: "20px",
  fontWeight: "500",
  color: "orange",
};

const padding = {padding: "2% 0%"}

const OurPortfolio = () => {
  return (
    <Container style={{padding: "3% 0%"}}>
      <h2>OUR PORTFOLIO</h2>
      <p style={{padding: "3% 0%", fontSize: "20px"}}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</p>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={padding} item xs={12} md={6}>
          <img style={image} src={portfolio} alt="" />
        <p style={value}>Isometric Perspective Mock-Up</p>
        </Grid>
        <Grid style={padding} item xs={12} md={6}>
          <img style={image} src={portfolio2} alt="" />
        <p style={value}>Time Zone App UI</p>
        </Grid>
        <Grid style={padding} item xs={12} md={6}>
          <img style={image} src={portfolio3} alt="" />
        <p style={value}>Viro Media Players UI</p>
        </Grid>
        <Grid style={padding} item xs={12} md={6}>
          <img style={image} src={portfolio4} alt="" />
        <p style={value}>Blog / Magazine Flat UI Kit</p>
        </Grid>
      </Grid>
    </Box>
    <Review></Review>
    </Container>
  );
};

export default OurPortfolio;