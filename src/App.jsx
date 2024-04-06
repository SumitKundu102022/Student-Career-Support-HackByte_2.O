// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";

import Header from "./Components/Header";
import Navbar from "./Components/nav";
import HeroSection from "./Components/HeroSection";
import ImageSection from "./Components/ImageSection";
import StudentCounseling from "./Components/StudentCounseling";

function App() {
 

  return (
    <>
      <div>
        {/* <Header /> */}
        <Navbar />
        <HeroSection />
        <ImageSection />
        <StudentCounseling/>
      </div>
      
     
    </>
  );
}

export default App
