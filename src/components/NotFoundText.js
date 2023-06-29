


import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const NotFoundText = () => {
    return ( 
<>


<Box  
    ml={155} mt={50} 
    sx={{
      backgroundColor: 'rgba(100, 47, 38, 0.5)', // 50% transparent grey
     
    }}>
    <Typography variant="h2" color="common.white" mb={2} pt={2} pl={2}>
        Page not found
      </Typography>
    </Box>


</>




     );
}
 
export default NotFoundtext;