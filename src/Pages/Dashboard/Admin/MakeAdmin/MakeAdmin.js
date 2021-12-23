import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "white",
  borderRadius: "3px",
};

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch(`https://quiet-hollows-53334.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          console.log(data);
        }
      });
  };
  return (
    <Container>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          style={style}
          id="outlined-basic"
          onBlur={handleOnBlur}
          variant="outlined"
          placeholder="john@gmail.com"
        />
        <br />
        <Button variant="outlined" type="submit">
          Make Admin
        </Button>
      </form>
    </Container>
  );
};

export default MakeAdmin;
