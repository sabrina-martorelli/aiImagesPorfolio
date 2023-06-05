import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const MainText = () => {
  return (
    <Box ml={205}>
      <Typography variant="h2" color="common.white" mb={2}>
        Nice to meet you!
      </Typography>
      <Typography variant="h5" color="common.white">
        I'm an experienced and passionate software engineer, always eager to learn and grow, keeping up to date with tech and best practices.
      </Typography>
      <Box mt={5}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" >
          More about Me
        </Button>
        
       
        </ThemeProvider>
      </Box>
    </Box>
  );
};

export default MainText;