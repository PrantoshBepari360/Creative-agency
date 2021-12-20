import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
  width: '100%',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '3px',
}

const Bg = {
  backgroundColor: '#FBD062'
}

const HandleProject = () => {
  return (
    <Box style={Bg}>
      <Container>
      <Box style={{padding: "5% 0%"}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} item xs={12} md={6}>
            <Box>
            <h1>Let us handel your project, professionally.</h1>
            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in genaral.</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
          placeholder="Your name / Company's name"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          multiline
          rows={4}
          variant="outlined" 
          placeholder="Your massage"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          variant="outlined" 
          type="submit"
          placeholder="Submit"
          />
          </Grid>
        </Grid>
      </Box>
      </Box>
      <p style={{marginBottom: "0px", padding: "3% 0%"}}>copyright Orange labs 2021</p>
    </Container>
    </Box>
  );
};

export default HandleProject;