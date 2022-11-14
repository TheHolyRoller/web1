import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaYouTube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>PO Box 1 Elbasan</p>
                            <h4>Albania</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> +35500000</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> waKeleyfamily@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>More about us</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className='social'>
                    <a href="https://www.facebook.com/daniel.wakeley.1" > <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }}/> </a>
                    <a href="https://www.facebook.com/daniel.wakeley.1" > <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }}/> </a>
                    <a href="https://twitter.com/" > <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /> </a>
                      <a href="https://instagram.com/">  <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /> </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
