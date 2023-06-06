
import React from 'react';

import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';

import { Routes, Route } from "react-router-dom";



function App() {


  <Routes>
      <Route path="/" element ={<Landing />} />
      <Route path="/AboutMe" element ={<AboutMe />} />
      <Route path="*" element={<NotFound />} />       
    </Routes>



}

export default App;
