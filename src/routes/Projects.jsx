import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Projects'
import LogoImage from '../components/LogoImage';
import Slider from '../components/Slider';
import Text from '../routes/Text';


//Put the Logo Image bac after some experimentation
/*
 <LogoImage heading='Humanitarian Projects.' text='Sponsorships' />

*/
const Projects = () => {
    return (
        <div>
            <Navbar />
            <Slider/>

            <Footer />
        </div>
    )
}

export default Projects
