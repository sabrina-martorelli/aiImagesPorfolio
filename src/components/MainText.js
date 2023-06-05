import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const MainText = () => {
  return (
    <Box>
      <Typography variant="h5">
        Nice to meet you!
      </Typography>
      <Typography variant="body1">
        I'm an experienced and passionate software engineer, always eager to learn and grow, keeping up to date with tech and best practices.
      </Typography>
      <Box>
        <Button variant="contained" color="primary">
          More about Me
        </Button>
        <Button variant="contained" color="primary">
          Porfolio
        </Button>
      </Box>
    </Box>
  );
};

export default MainText;