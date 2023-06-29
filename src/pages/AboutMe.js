
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AboutMeText from '../components/AboutMeText';


//https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787714_1280.jpg




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

const AboutMe = () => {
    const urls = [
        'https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787714_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787714_1280.jpg',
      ];
    
 
      const classes = useStyles();
      const [randomImage, setRandomImage] = useState('');
    
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * urls.length);
        setRandomImage(urls[randomIndex]);
      };
    
      
      useState(getRandomImage);


      return (
    
        <>
       
         


          <div className={classes.root} style={{ backgroundImage: `url(${randomImage})` }}>
          <AboutMeText/>   

      
          </div>




        </>
      );
    
}
 
export default AboutMe;





