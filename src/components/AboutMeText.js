import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';


const cardsData = [
  { title: 'WORK EXPERIENCE', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.' },
  { title: 'SKILLS', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit' },
  { title: 'LANGUAGES', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in' },
  { title: 'EDUCATIONAL BACKGROUND', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' },
  { title: 'INTERESTS', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },

];


const AboutMeText = () => {
  return (
    <>
    <Grid container 
    p={30}
    spacing={{ xs: 2, md: 2 }} 
    columns={{ xs: 4, sm: 8, md: 12 }}
    justifyContent="center"
    alignItems="flex-start"
    >
      {cardsData.map((card, index) => (
        <Grid item xs={2} sm={4} md={2} key={index} 
        sx={{
          backgroundColor: 'rgba(128, 128, 128, 0.2)', 
          height: '50vh',
        }}
        >
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" >
                {card.title}

              </Typography>
              <Typography variant="h5" color="text.secondary" >
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default AboutMeText;