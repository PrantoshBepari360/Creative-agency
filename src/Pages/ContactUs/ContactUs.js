import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const iconAlign = { 
  display: "flex", 
  alignItems: "center",
}

const ContactUs = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <h2>Contact Us</h2>
        <img
          style={{width: "100%"}}
          src="https://i.ibb.co/2M3tRbq/map5.png"
          alt=""
        />
        <Grid style={{padding: "5% 0%"}} container spacing={2}>
          <Grid style={{padding: "0% 2%"}} item xs={12} md={6}>
            <h3>Get in a touch !</h3>
            <TextField
              style={style}
              id="outlined-basic"
              variant="outlined"
              placeholder="Your name / Company's name"
            />
            <br />
            <TextField
              style={style}
              id="outlined-basic"
              variant="outlined"
              placeholder="Your email address"
            />
            <br />
            <TextField
              style={style}
              id="outlined-basic"
              variant="outlined"
              placeholder="Your Subject"
            />
            <br />
            <TextField
              style={style}
              id="outlined-basic"
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
          <Grid style={{padding: "0% 2%"}} item xs={12} md={6}>
            <h3>Contact info !</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <Box style={iconAlign}>
              <AddLocationAltOutlinedIcon/>
              <Box style={{ textAlign: "left", marginLeft: "20px" }}>
                <p>Address:</p>
                <p>
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </Box>
            </Box>
            <Box style={iconAlign}>
              <MarkunreadOutlinedIcon/>
              <Box style={{ textAlign: "left", marginLeft: "20px" }}>
                <p>Email:</p>
                <p>prantoshbepari@gmail.com</p>
              </Box>
            </Box>
            <Box style={iconAlign}>
              <AddIcCallOutlinedIcon/>
              <Box style={{ textAlign: "left", marginLeft: "20px" }}>
                <p>Phone:</p>
                <p>(239) 555-0108</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
