import React from 'react'
import './WeeklyServicesStyles.css'

import {Link} from 'react-router-dom'

//Import the Videos Here
import Youtube from '../assets/Waterfall.mp4';
import { Container } from 'react-bootstrap';

/*
This Section should be all about Ministry Material. So Add in An embeded Video Carousel as well as Links to Facebook Live.
Instead of a Contact Button Add in a Button to Join the Live or Subscribe to the YouTube Channel

*/


const WeeklyServices = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>WeeklyServices</h1>
                <p>The lives we've seen transformed by the Good News of the Gospel</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                <div className="image-stack top">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EBPifYhWk44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                </div>
            </div>
            </div>
            </div>

    );

}

export default WeeklyServices
