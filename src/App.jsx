// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";



import Navbar from "./Components/nav";
import HeroSection from "./Components/HeroSection";
import ImageSection from "./Components/ImageSection";
import StudentCounseling from "./Components/StudentCounseling";
import LoanScholarship from "./Components/LoanScholarship";
import BestCourses from "./Components/BestCources";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageSection />
      <StudentCounseling />
      <LoanScholarship />
      <BestCourses />
      <Footer />
    </div>
    
     
   
  );
}


export default App;
