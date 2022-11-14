import React from 'react';
import MeetingCards from './MeetingCards';
import {Link} from 'react-router-dom';
import Footer from './Footer';



//Import the Videos Here
import Youtube from '../assets/Waterfall.mp4';
import { Container } from 'react-bootstrap';

/*
This Section should be all about Ministry Material. So Add in An embeded Video Carousel as well as Links to Facebook Live.
Instead of a Contact Button Add in a Button to Join the Live or Subscribe to the YouTube Channel

So let's analyse the situation. So far most of the pages are at an acceptable level for the most part. The One page that really does need
some improvements in the Service Page. There are pre made cards with differently sized divs on them. These divs have text and are styled acoordingly

Now what do we want to do with these cards. Well there needs to be some hrefs on them as well as some social media icons. What would be quite nice
is if there were some pictures on these cards as well as some lines of text in the suitable font and the suitable size.
There should be some examples on Youtube and online as well as github.
Overall the file structure and the styling should be noted as well as the approach to integrate the Cards with the rest of the
Elements of the file. The Navbar positioning as well as the footer is worth noting
Overall the best appraoch would probably be to use the current code and then observe the Patterns and styling of other examples as well as the
file structure.



*/


const YouTubeServices = () => {
    return (
        <div className='training'>
            <div className='left'>
                <div className='meetingContainer'>
                <MeetingCards/>
                </div>
                {/* The Contact Button needs some Styling or total removal */}
            </div>
            <div className='right'>
                <div className='img-container'>
                <div className="image-stack top">
                <iframe className='iframe' width="100" height="50" src="https://www.youtube.com/embed/EBPifYhWk44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>

                </div>
            </div>
            </div>
            <Footer/>
            </div>

    );

}

export default YouTubeServices
