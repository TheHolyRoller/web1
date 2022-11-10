
import React, { Component } from 'react'
import './LogoImage.css'

class LogoImage extends Component {
    render() {
        return (
            <div className='logo-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default LogoImage
