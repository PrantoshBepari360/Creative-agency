import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Mobile from '../../../images/icons/service1.png'
import Graphic from '../../../images/icons/service2.png'
import Web from '../../../images/icons/service3.png'

const img = {
  width: '20%',
}

const Services = () => {
  return (
    <Box style={{padding: "5% 0%"}}>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
      <h1 style={{margin: '0 0 50px 0'}}>Provide awsome services</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img style={img}  src={Mobile} alt="" />
          <h2>Web & Mobile design</h2>
          <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <img style={img} src={Graphic} alt="" />
        <h2>Graphic design</h2>
        <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <img style={img}  src={Web} alt="" />
        <h2>Web development</h2>
        With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Box>
  );
};

export default Services;