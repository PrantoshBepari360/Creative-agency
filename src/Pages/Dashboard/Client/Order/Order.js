import { Box, Container, Grid, TextField } from '@mui/material';
import React from 'react';

const style = {
  width: '100%',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '3px',
}

const Order = () => {
  return (
    <Box>
      <Container>
      <Grid item xs={12} md={10} xl={10}>
      <h2>Please Order</h2>
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Your name / Company's name"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Your email address"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Graphic Design"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          multiline
          rows={4}
          variant="outlined" 
          placeholder="Project Details"
          />
          <br />
          <Box style={{display: "flex", width: "100%",}}>
          <TextField 
          style={{width: '100%',
          marginBottom: '10px',
          backgroundColor: 'white',
          borderRadius: '3px',
          marginRight: '3%'}}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Price"
          />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Upload project file"
          />
          </Box>
          <TextField 
          style={style}
          id="outlined-basic" 
          variant="outlined" 
          type="submit"
          />
          </Grid>
      </Container>
    </Box>
  );
};

export default Order;