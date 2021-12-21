import { Alert, Box, Button, Container, Grid, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const Order = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [design, setDesign] = useState('');
  const [project, setProject] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);


  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("design", design);
    formData.append("project", project);
    formData.append("price", price);
    formData.append("image", image);
    console.log(formData);

    // send to the sarver
    fetch("http://localhost:5000/order", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  return (
    <Box>
      <Container>
        <Grid item xs={12} md={10} xl={10}>
          <h2>Please Order</h2>
          <form onSubmit={handleOrderSubmit}>
            <TextField
              style={style}
              name="name"
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              placeholder="Your name / Company's name"
            />
            <br />
            <TextField
              style={style}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              placeholder="Your email address"
            />
            <br />
            <TextField
              style={style}
              name="design"
              onChange={(e) => setDesign(e.target.value)}
              variant="outlined"
              placeholder="Graphic Design"
            />
            <br />
            <TextField
              style={style}
              name="project"
              onChange={(e) => setProject(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
              placeholder="Project Details"
            />
            <br />
            <Box style={{ display: "flex", width: "100%" }}>
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "3px",
                  marginRight: "3%",
                }}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                variant="outlined"
                placeholder="Price"
              />
               <Input
               style={style}
                accept="image/*"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Box>
            <br />
            <Button variant="contained" type="submit">
          Submit
        </Button>
          </form>
          <br />
          {orderSuccess && (
            <Alert severity="success">Order Booked successfully</Alert>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Order;
