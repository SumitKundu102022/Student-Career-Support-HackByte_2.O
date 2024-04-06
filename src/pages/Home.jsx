import React from 'react';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import StudentCounseling from './components/StudentCounseling';
import LoanScholarship from './components/LoanScholarship';
import BestCourses from './components/BestCourses';

function Main() {
    return (
        <div>
            <HeroSection />
            <ImageSection />
            <StudentCounseling />
            <LoanScholarship />
            <BestCourses />
        </div>
    );
}

export default Main;