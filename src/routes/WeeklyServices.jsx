import React from 'react'
import Footer from '../components/Footer'
import LogoImage from '../components/LogoImage'
import Navbar from '../components/Navbar'
import TimelineSection from '../components/WeeklyServices'
import Button from 'react-bootstrap/Button';

/*
Add an Embedded Youtube Video With Buttons for Live Streams and YouTube Channel
Put them just above the Footer in the middle where the Photos Are
*/

const WeeklyServices = () => {
    return (
        <div>
            <Navbar />
            <LogoImage heading='WeeklyServices' text='Become Inspired' />
            <TimelineSection />
            <Footer />
        </div>
    );

}

export default WeeklyServices
