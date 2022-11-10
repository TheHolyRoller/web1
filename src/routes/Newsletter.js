import React from 'react'
import Footer from '../components/Footer'
import LogoImage from '../components/LogoImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Newsletter = () => {
    return (
        <div>
            <Navbar />
            <LogoImage heading='Newsletter.' text='Sign up to our Email group' />
            <Form />
            <Footer/>
        </div>
    );

}

export default Newsletter
