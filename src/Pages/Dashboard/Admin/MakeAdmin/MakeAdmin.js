import { Container, TextField } from '@mui/material';
import React from 'react';

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const MakeAdmin = () => {
  return (
    <Container>
      <h2>Make Admin</h2>
      <TextField
        style={style}
        id="outlined-basic"
        variant="outlined"
        placeholder="john@gmail.com"
      />
      <TextField
        style={{width: "10%"}}
        id="outlined-basic"
        variant="outlined"
        type="submit"
      />
    </Container>
  );
};

export default MakeAdmin;