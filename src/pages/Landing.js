

import LandingText from '../components/LandingText'
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import urls from '../data/dataLanding.json'

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

const Landing = () => {

 
      const classes = useStyles();
      const [randomImage, setRandomImage] = useState('');
    
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * urls.length);
        setRandomImage(urls[randomIndex].url);
      };
    
      
      useState(getRandomImage);


      return (
    
        <>
       
         


          <div className={classes.root} style={{ backgroundImage: `url(${randomImage})` }}>
          <LandingText/>   
        
          </div>




        </>
      );
    
}
 
export default Landing;


