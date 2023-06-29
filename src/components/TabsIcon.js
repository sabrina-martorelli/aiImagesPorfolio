import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { Link } from 'react-router-dom';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function TabsIcon() {
  return (
    <Tabs aria-label="Icon tabs" defaultValue={1} 
    sx={{ borderRadius: 'sm' 
    
    }}>
      <TabList>
        <Tab>      
           <Link to="/">
           HOME
       </Link>
          {/* <PhoneIcon /> */}
        </Tab>
        <Tab>
          {/* <FavoriteIcon /> */}
         CHANGE IMAGE
        </Tab>
        <Tab>
            FOLLOW
          {/* <PersonPinIcon /> */}
        </Tab>
      </TabList>
    </Tabs>
  );
}