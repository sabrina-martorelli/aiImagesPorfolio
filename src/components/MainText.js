import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const MainText = () => {
  return (
    <Box>
      <Typography variant="h2" color="common.white">
        Nice to meet you!
      </Typography>
      <Typography variant="h5" color="common.white">
        I'm an experienced and passionate software engineer, always eager to learn and grow, keeping up to date with tech and best practices.
      </Typography>
      <Box>
        <Button variant="contained" >
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