import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

import { makeStyles } from '@mui/styles';
import NotFoundText from '../components/NotFoundText';


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


function NotFound() {
    
    const classes = useStyles();
    
    return (
        <div className={classes.root} style={{ backgroundImage: `url(https://images.nightcafe.studio/jobs/Ulr7rJfLhEqiKE2SCNNn/Ulr7rJfLhEqiKE2SCNNn--100--JBXY1_2x.jpg?tr=w-9999,c-at_max)` }}>

 <NotFoundText/>

        </div>
      );
    
    
    // return (
    //     <>
    //  <Box 
    //  pb={10} 
    //  pr={5} 
    //  pl={5} 
    //  sx={{ bgcolor:'#c7d8e1',
    //   border: 2,
    //   borderColor: '#F7F7F7', 
    //   borderRadius: 3, 
    //   maxWidth: '70%', 
    //   margin: "0 auto" }}>

    // <Typography 
    // pt={10} 
    // pb={10} 
    // variant='h3' 
    // align='center'>
    // Page not found
    // </Typography>

    // <Typography  
    // pt={10} 
    // pb={50} 
    // variant='h4' 
    // align='center'>
    // The URL doesn't exist on the site.
    // </Typography>
    // </Box>
                
    //     </>
    // )
};

export default NotFound;