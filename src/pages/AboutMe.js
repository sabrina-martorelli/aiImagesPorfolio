import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const cardsData = [
  { title: 'Card 1', content: 'This is the content of Card 1' },
  { title: 'Card 2', content: 'This is the content of Card 2' },
  { title: 'Card 3', content: 'This is the content of Card 3' },
  { title: 'Card 4', content: 'This is the content of Card 4' },
  { title: 'Card 5', content: 'This is the content of Card 5' },
  { title: 'Card 6', content: 'This is the content of Card 6' },
];

const AboutMe = () => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutMe;