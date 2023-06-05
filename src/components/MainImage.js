import React from 'react';
import { makeStyles } from '@mui/styles';
import MainText from './MainText';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/03/06/11/39/ai-generated-7833307_960_720.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const MainImage = () => {
  const classes = useStyles();

  return <div className={classes.root}> <MainText/></div>;
};

export default MainImage;
