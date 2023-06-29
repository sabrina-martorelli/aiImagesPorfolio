
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
    
    
    
};

export default NotFound;