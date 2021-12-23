import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Review = () => {
  const [reviews, setReview] = useState([])

  useEffect(() => {
    fetch("https://quiet-hollows-53334.herokuapp.com/review")
    .then(res => res.json())
    .then(data => setReview(data))
  }, []);

  return (
    <div>
      <h2 style={{padding: "3% 0%"}}>CLIENT REVIEW</h2>
      <Grid container spacing={1}>
      {reviews.map(review => 
        <Grid style={{padding: '0% 3%',}}key={review._id} item xs={12} md={6}>
        <Box style={{ border: '1px solid #4b4b4b', borderRadius: "5px", marginBottom: "5%", padding: '3% 3%'}}>
        <h2>{review.name}</h2>
        <h4>{review.companyName}</h4>
        <p>{review.description}</p>
        </Box>
        </Grid>
      )}
      </Grid>
    </div>
  );
};

export default Review;