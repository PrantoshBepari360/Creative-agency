import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import tems1 from "../../images/teams/1.png";
import tems2 from "../../images/teams/2.png";
import tems3 from "../../images/teams/3.png";
import tems4 from "../../images/teams/4.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const image = {
  marginTop: "5%",
  borderRadius: "50%",
};

const value = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#30bae7",
};

const icon = {
  color: "#fff",
  fontSize: "30px",
  margin: "5px",
  padding: "5px",
  backgroundColor: "#bdd1df",
  borderRadius: "50%",
};

const padding = { padding: "0 5%" };

const OurTeam = () => {
  return (
    <Container style={{ padding: "4% 0" }}>
      <h1>MEET OUR BEAUTIFUL TEAM</h1>
      <p style={{ padding: "3% 0" }}>
        We are a small team of designers and developers, who help brands with
        big ideas.
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={image} src={tems1} alt="ANNE HATHAWAY" />
            <h2>Anne Hathaway</h2>
            <p style={value}>CEO / Marketing Guru</p>
            <p style={padding}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <Box>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <FacebookIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/"
              >
                <TwitterIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <LinkedInIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://mail.google.com/"
              >
                <MailRoundedIcon style={icon} />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={image} src={tems2} alt="kate upton" />
            <h2>Kate Upton</h2>
            <p style={value}>Creative Director</p>
            <p style={padding}>
              Duis aute irure dolor in in voluptate velit esse cillum dolore
              fugiat nulla pariatur. Excepteur sint occaecat non diam proident.
            </p>
            <Box>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/"
              >
                <TwitterIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <LinkedInIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://mail.google.com/"
              >
                <MailRoundedIcon style={icon} />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={image} src={tems3} alt="olivia wilde" />
            <h2>Olivia Wilde</h2>
            <p style={value}>Lead Designer</p>
            <p style={padding}>
              Duis aute irure dolor in in voluptate velit esse cillum dolore
              fugiat nulla pariatur. Excepteur sint occaecat non diam proident.
            </p>
            <Box>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <FacebookIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/"
              >
                <TwitterIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <LinkedInIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://mail.google.com/"
              >
                <MailRoundedIcon style={icon} />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={image} src={tems4} alt="ashley greene" />
            <h2>Ashley Greene</h2>
            <p style={value}>Seo / Developer</p>
            <p style={padding}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <Box>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <FacebookIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/"
              >
                <TwitterIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <LinkedInIcon style={icon} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://mail.google.com/"
              >
                <MailRoundedIcon style={icon} />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurTeam;
