import React from 'react'
import './MeetingCards.css';

import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const MeetingCards = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                {/* Add in the Photos here with the card class  */}
                <img src="/images/frostyMnt.jpg" alt=""/>

                    <span className='bar'></span>
                    {/**Add in the Text here  */}
                    <p>elit, sed do eiusmod</p>
                    {/**Add in the Social Media Icons Here  */}
                    <a className='btn' href="https://www.instagram.com/" > <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }}/> </a>

                </div>
                <div className='card'>
                {/** Photo */}
                <img src="/images/frostyMnt.jpg" alt=""/>
                    <span className='bar'></span>

                    {/**Add in the Text here  */}
                    <p>elit, sed do eiusmod</p>

                    {/**Add in the Social Media Icons Here  */}
                    <a className='btn' href="https://www.facebook.com/daniel.wakeley.1" > <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }}/> </a>

                </div>
                <div className='card'>
                {/** Photo */}
                <img src="/images/frostyMnt.jpg" alt=""/>

                    <span className='bar'></span>
                    {/**Add in the Text here  */}
                    <p>elit, sed do eiusmod</p>

                    {/**Add in the Social Media Icons Here  */}
                    <a className='btn' href="https://www.youtube.com/" > <FaYoutube size={30} style={{ color: '#ffffff', marginRight: '1rem' }}/> </a>
                </div>
            </div>
        </div>

    );

}

export default MeetingCards
