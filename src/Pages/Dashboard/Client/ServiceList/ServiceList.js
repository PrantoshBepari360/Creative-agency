import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import service1 from '../../../../images/icons/service1.png'
import service2 from '../../../../images/icons/service2.png'

const ServiceList = () => {
  return (
    <Container>
      <h2>Service</h2>
      <Box sx={{ flexGrow: 1 }}>
      <Grid style={{textAlign: 'left'}} container spacing={10}>
        <Grid item xs={12} md={6}>
          <img style={{width: "15%"}} src={service1} alt="" />
          <h2>Web and mobile disign</h2>
          <p>We Craft stunning and amazing web UI, using a well drafted ux to fit your product.</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: "15%"}} src={service2} alt="" />
          <h2>Graphic Design</h2>
          <p>Amazing flyers, social media post and brand representations that would make your brand stand out.</p>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default ServiceList;