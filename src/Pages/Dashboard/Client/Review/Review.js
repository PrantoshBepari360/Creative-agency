import { Container, TextField } from '@mui/material';
import React from 'react';

const style = {
  width: '100%',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '3px',
}

const Review = () => {
  return (
    <Container>
      <h2>Review</h2>
      <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Your name"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          variant="outlined" 
          placeholder="Company's name, Description"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          // label="Outlined" 
          multiline
          rows={4}
          variant="outlined" 
          placeholder="Description"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          type="submit"
          />
    </Container>
  );
};

export default Review;