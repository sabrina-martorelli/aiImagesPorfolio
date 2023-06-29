
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


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
 
export default NotFoundText;