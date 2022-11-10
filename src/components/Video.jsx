import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MeetingsCards from '../components/Meetings';


import LogoImage from '../components/LogoImage';
import Slider from '../components/Slider';

import Waterfall from '../assets/Waterfall.mp4'



//<MeetingsCards />


const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Waterfall} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>God's Ministry</h1>
                <p>God sent us to the Beautiful Country of Albania </p>
                <div>
                    <Link to='/projects' className='btn btn-light'>What's On</Link>
                    <Link to='/ministrymaterial' className='btn btn-light'>Weekly Services </Link>
                </div>

                <div className='paragraph'>
                <p>
                "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"
                </p>

                </div>

            </div>
        </div>
    )
}

export default Video
