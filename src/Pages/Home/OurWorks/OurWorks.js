import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../../images/carousel-1.png";
import Travel from "../../../images/carousel-2.png";
import Wev from "../../../images/carousel-3.png";

const style = {
  width: "90%",
};

const Bg = {
  backgroundColor: "#111430",
  padding: "5% 0%",
};

const OurWorks = () => {
  return (
    <Box style={Bg}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <h1 style={{ color: "#fff", marginBottom: "70px" }}>
            Here are some of <span style={{ color: "#7AB259" }}>our works</span>
          </h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img style={style} src={Img} alt="" />
            </Grid>
            <Grid item xs={12} md={4}>
              <img style={style} src={Travel} alt="" />
            </Grid>
            <Grid item xs={12} md={4}>
              <img style={style} src={Wev} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurWorks;
