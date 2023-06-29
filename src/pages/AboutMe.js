
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
     'https://www.verke.org/uploads/2022/08/d3c974c4-panu_giant_robot_standing_in_the_center_of_a_beautiful_landscap_b555fb6f-fb9c-4bb1-827d-ef7b1df41a7a-1600x800.png',
     'https://images.nightcafe.studio/jobs/cNxmQICjMo8xdPi31Zjt/cNxmQICjMo8xdPi31Zjt_6.9444x.jpg?tr=w-1600,c-at_max',
     'https://miro.medium.com/v2/resize:fit:1400/0*QvtiBBzbdBOCRF-o.jpeg',
     'https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg',
     'https://etinsights.et-edge.com/wp-content/uploads/2022/09/shutterstock_2197962897.jpg',
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





