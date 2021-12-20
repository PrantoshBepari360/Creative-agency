import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Frame from '../../../images/logos/Frame.png'
import Slack from '../../../images/logos/slack.png'
import Google from '../../../images/logos/google.png'
import Uber from '../../../images/logos/uber.png'
import Netflix from '../../../images/logos/netflix.png'
import Airbnb from '../../../images/logos/airbnb.png'

const Bg = {
  backgroundColor: '#FBD062'
}

const styles = {
  display: 'flex', 
  justifyContent: 'center', 
  marginTop: '5%'
}

const img = {
  width: '15%', 
  margin: '2%'
}

const Banner = () => {
  return (
    <Box>
      <Box style={Bg}>
      <Container>
      <Box style={{padding: "5% 0%"}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} item xs={12} md={6}>
            <Box>
            <h1>Let’s Grow Your Brand To The Next Level</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            <Button style={{backgroundColor: '#111430', color: '#fff'}}>Hire Us</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={Frame} alt="" />
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Container>
      </Box>
    <Container>
      <Box style={styles}>
      <img style={img} src={Slack} alt="" />
      <img style={img} src={Google} alt="" />
      <img style={img} src={Uber} alt="" />
      <img style={img} src={Netflix} alt="" />
      <img style={img} src={Airbnb} alt="" />
      </Box>
    </Container>
    </Box>
  );
};

export default Banner;