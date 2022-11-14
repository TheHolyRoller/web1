import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LogoImage from '../components/LogoImage';
import Slider from '../components/Slider';
import Text from '../routes/Text';
import Carousel from '../components/Carousel.jsx';
import { countries } from "../components/Data.jsx";
import './Projects.css';



const Projects = () => {
    return (

        <div className="Apps">
        <div className="nav">
        <Navbar/>
        </div>
        <Carousel images={countries} />
        <div className="foot">
        <Footer/>
        </div>
        </div>

    );

}

export default Projects
