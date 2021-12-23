import * as React from "react";
import { Container, Grid } from "@mui/material";

const ServiceList = () => {
  const [services, setServices] = React.useState([]);
  console.log(services);

  React.useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <Container>
      <h2>Service {services.length}</h2>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid key={service._id} item xs={12} sm={6} md={4}>
            <img
              style={{ width: "100%", height: "70%" }}
              src={`data:image/png;base64,${service.image}`}
              alt="Doctor img"
            />
            <h2>{service.name}</h2>
            <h3>{service.description}</h3>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceList;
