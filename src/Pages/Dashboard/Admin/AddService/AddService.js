import { Alert, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const AddService = () => {
  const [serviceInfo, setServiceInfo] = useState({});
  const [serviceSuccess, setServiceSuccess] = useState(false);

  const handleServiceSubmit = (e) => {
    e.preventDefault();

    // send to the sarver
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setServiceSuccess(true);
        }
      });
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...serviceInfo };
    newInfo[field] = value;
    setServiceInfo(newInfo);
  };

  return (
    <Container>
      <h2>Add Service</h2>
      <form onSubmit={handleServiceSubmit}>
        <TextField
          style={style}
          id="outlined-basic"
          name="titel"
          onBlur={handleOnBlur}
          variant="outlined"
          placeholder="Enter titel"
        />
        <br />
        <TextField
          style={style}
          id="outlined-basic"
          name="file"
          onBlur={handleOnBlur}
          variant="outlined"
          placeholder="Update image"
        />
        <br />
        <TextField
          style={style}
          id="outlined-basic"
          multiline
          rows={4}
          name="description"
          onBlur={handleOnBlur}
          variant="outlined"
          placeholder="Enter Description"
        />
        <br />
        <TextField style={style} id="outlined-basic" type="submit" />
      </form>
      <br />
      {serviceSuccess && (
        <Alert severity="success">Add service successfully</Alert>
      )}
    </Container>
  );
};

export default AddService;
