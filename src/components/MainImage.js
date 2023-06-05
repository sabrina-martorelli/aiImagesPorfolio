import React  from 'react';
import { makeStyles } from '@mui/styles';
import MainText from './MainText';




const useStyles = makeStyles((theme) => ({


  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: (props) => `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));


const MainImage = (props) => {

   
  const classes = useStyles(props);
  
 

  return <div className={classes.root}> <MainText/></div>;
};

export default MainImage;
