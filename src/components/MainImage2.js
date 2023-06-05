import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import MainText from './MainText';

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

const MainImage = ({ imageList }) => {
  const classes = useStyles();
  const [randomImage, setRandomImage] = useState('');

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    setRandomImage(imageList[randomIndex]);
  };

  // Call getRandomImage initially to set an initial random image
  useState(getRandomImage);

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${randomImage})` }}>
      <MainText/>
    
    </div>
  );
};

export default MainImage;
