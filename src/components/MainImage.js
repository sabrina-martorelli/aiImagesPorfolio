import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:720/format:webp/1*jbvqG9vT9ishTLzl_CVbiw.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const MainImage = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default MainImage;
