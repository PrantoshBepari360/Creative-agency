import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Lists = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={12} xl={12}>
      <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Service</TableCell>
            {/* <TableCell>Projects</TableCell> */}
            <TableCell>Project image</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow
              key={service._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {service.name}
              </TableCell>
              <TableCell>{service.email}</TableCell>
              <TableCell>{service.design}</TableCell>
              {/* <TableCell>{service.project}</TableCell> */}
              <TableCell style={{ width: "10%"}}>
              <img
              style={{width: "100%",}}
              src={`data:image/png;base64,${service.image}`}
              alt="Doctor img"
            />
              </TableCell>
              <TableCell align="right">{service.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Container>
  );
};

export default Lists;