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
import LoanScholarship from "./Components/LoanScholarship";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home'; // Import other pages like Home
// import Register from './pages/Register'; // Import Register page
// import {Routes} from 'react-router-dom'
import BestCourses from "./Components/BestCources";

const App = () => {
 

  return (
    <>
      {/* <Header /> */}
      <Navbar />
        <HeroSection />
        <ImageSection />
        <StudentCounseling />
      <LoanScholarship />
      <BestCourses/>
      
    </>
  );
}

export default App
