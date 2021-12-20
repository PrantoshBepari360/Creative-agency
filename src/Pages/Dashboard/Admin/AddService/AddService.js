import { Container, TextField } from "@mui/material";
import React from "react";

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const AddService = () => {
  return (
    <Container>
      <h2>Add Service</h2>
      <TextField
        style={style}
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter titel"
      />
      <br />
      <TextField
        style={style}
        id="outlined-basic"
        variant="outlined"
        placeholder="Update image"
      />
      <br />
      <TextField
        style={style}
        id="outlined-basic"
        multiline
        rows={4}
        variant="outlined"
        placeholder="Enter Description"
      />
      <br />
      <TextField style={style} id="outlined-basic" type="submit" />
    </Container>
  );
};

export default AddService;
