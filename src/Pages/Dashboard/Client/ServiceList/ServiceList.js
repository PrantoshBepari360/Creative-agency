import * as React from "react";
import { Container, Grid } from "@mui/material";

const ServiceList = () => {
  const [services, setServices] = React.useState([]);
  console.log(services);

  React.useEffect(() => {
    fetch(`https://quiet-hollows-53334.herokuapp.com/service`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <Container>
      <h2 style={{padding: '3% 0%'}}>Service {services.length}</h2>
      <Grid container spacing={1}>
        {services.map((service) => (
          <Grid style={{padding: '0% 3%'}}key={service._id} item xs={12} md={6}>
            <img
            style={{width: "50%"}}
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
