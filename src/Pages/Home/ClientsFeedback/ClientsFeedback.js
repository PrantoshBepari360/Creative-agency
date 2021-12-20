import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Castomar from '../../../images/customer-1.png';
import Castomar1 from '../../../images/customer-2.png';
import Castomar2 from '../../../images/customer-3.png';

const Img = {
  width: '50%'
}

const ClientsFeedback = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Clients <span style={{ color: "#7AB259" }}>Feedback</span></h1>
      <Box style={{margin: '5% 0'}}>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
              <img style={Img} src={Castomar} alt="" />
            </Box>
            <Box>
              <h2>Nash Patrik</h2>
              <h3>CEO, Manpol</h3>
            </Box>
          </Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
              <img style={Img} src={Castomar1} alt="" />
            </Box>
            <Box>
              <h2>Miriam Barron</h2>
              <h3>CEO, Manpol</h3>
            </Box>
          </Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
              <img style={Img} src={Castomar2} alt="" />
            </Box>
            <Box>
              <h2>Bria Malone</h2>
              <h3>CEO, Manpol</h3>
            </Box>
          </Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
        </Grid>
      </Grid>
      </Container>
      </Box>
    </Box>
  );
};

export default ClientsFeedback;
