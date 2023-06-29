import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const TrendyButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f44336',
  color: '#fff',
  borderRadius: '24px',
  padding: '12px 24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#ff7961',
  },
  '& a': {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'inherit',
  },
}));



const MainText = () => {

  return (
    <Box ml={155} mt={50} 
      sx={{
        backgroundColor: 'rgba(128, 128, 128, 0.2)', // 50% transparent grey
      }}
    >
      <Typography variant="h2" color="common.white" mb={2} pt={2} pl={2}>
        Nice to meet you!
      </Typography>
      <Typography variant="h5" color="common.white" pl={2}>
        I'm an experienced and passionate software engineer, always eager to learn and grow, keeping up to date with tech and best practices.
      </Typography>
      <Box mt={3} pl={2} pb={2}>
        <TrendyButton component={Link} to="/aboutme">
          <span>More about Me</span>
        </TrendyButton>
      </Box>
    </Box>
  );
};

export default MainText;