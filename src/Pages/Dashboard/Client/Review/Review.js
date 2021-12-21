import { Alert, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const style = {
  width: '100%',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '3px',
}

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // send to the sarver
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setReviewSuccess(true);
        }
      });
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewInfo };
    newInfo[field] = value;
    setReviewInfo(newInfo);
  };
  return (
    <Container>
      <h2>Review</h2>
      <form onSubmit={handleReviewSubmit}>
      <TextField 
          style={style}
          id="outlined-basic" 
          name="name"
          onBlur={handleOnBlur}
          variant="outlined" 
          placeholder="Your name"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          name="companyName"
          onBlur={handleOnBlur}
          variant="outlined" 
          placeholder="Company's name, Description"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          name="description"
          onBlur={handleOnBlur} 
          multiline
          rows={4}
          variant="outlined" 
          placeholder="Description"
          />
          <br />
          <TextField 
          style={style}
          id="outlined-basic" 
          type="submit"
          />
      </form>
      <br />
          {reviewSuccess && (
            <Alert severity="success">Review add successfully</Alert>
          )}
    </Container>
  );
};

export default Review;