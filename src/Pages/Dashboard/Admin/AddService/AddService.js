import { Alert, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const AddService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceSuccess, setServiceSuccess] = useState(false);
  const [image, setImage] = useState(null);

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    // send to the sarver
    fetch("http://localhost:5000/service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setServiceSuccess(true);
        }
      });
  };

  return (
    <Container>
      <h2>Add Service</h2>
      <form onSubmit={handleServiceSubmit}>
        <TextField
          style={style}
          id="outlined-basic"
          name="titel"
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          placeholder="Enter titel"
        />
        <br />
        <TextField
          style={style}
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <TextField
          style={style}
          id="outlined-basic"
          multiline
          rows={4}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          placeholder="Enter Description"
        />
        <br />
        <Button variant="outlined" type="submit">
          Add Service
        </Button>
      </form>
      <br />
      {serviceSuccess && (
        <Alert severity="success">Add service successfully</Alert>
      )}
    </Container>
  );
};

export default AddService;
