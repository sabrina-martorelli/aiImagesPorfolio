import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MainImage from '../components/MainImage';

//https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787714_1280.jpg

const cardsData = [
  { title: 'WORK EXPERIENCE', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'SKILLS', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' },
  { title: 'LANGUAGES', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,' },
  { title: 'EDUCATIONAL BACKGROUND', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,' },
  { title: 'HONOR & AWARDS', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,' },
  { title: 'INTERESTS', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
];

const backs = [
  'https://cdn.pixabay.com/photo/2023/03/06/11/39/ai-generated-7833307_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/11/23/22/27/man-7613011_1280.jpg',
  'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jbvqG9vT9ishTLzl_CVbiw.jpeg',
  'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/12/21/e9cb4da8-8867-447b-910e-3fd9cafb9516_8c570677.jpg?itok=WizBCCZy&v=1671560574',
  'https://storage.googleapis.com/cdn.openart.ai/presets/cover_image20_4_edited.jpeg',
  'https://www.analyticsinsight.net/wp-content/uploads/2023/04/8-FREE-NSFW-AI-Art-Generators-to-Create-Images-from-Text.jpg',
];



const AboutMe = () => {
  return (
<>


    {/* <MainImage imageList={backs} /> */}

    <Grid container 
    p={30}
    spacing={{ xs: 2, md: 2 }} 
    columns={{ xs: 4, sm: 8, md: 12 }}
    justifyContent="center"
    alignItems="flex-start"
    >
      {cardsData.map((card, index) => (
        <Grid item xs={2} sm={4} md={2} key={index} 
        sx={{
          backgroundColor: 'red', // Replace 'blue' with your desired color value
          height: '50vh',
        }}
        >
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" >
                {card.title}

              </Typography>
              <Typography variant="h5" color="text.secondary" >
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    </>
  );
};

export default AboutMe;