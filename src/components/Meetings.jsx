import React from 'react'
import {Link} from 'react-router-dom'
import './MeetingsStyles.css'

/* Add in a Photo Carousel and Some more info about what we do.
Might be best to get Rid of the Cards Altogether



*/


const Meetings = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Individual -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Sponsor</p>
                    <p>- Student -</p>
                    <p>- Subject -</p>
                    <p>- Work -</p>
                    <p>- Contact -</p>
                    <Link to='/contact' className='btn'>More Info</Link>
                </div>
                <div className='card'>
                    <h3>- Collective -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Invest</p>
                    <p>- Family -</p>
                    <p>- Business -</p>
                    <p>- Type -</p>
                    <p>- Contact -</p>
                    <Link to='/contact' className='btn'>More Info</Link>
                </div>
                <div className='card'>
                    <h3>- Outreach -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Ministry</p>
                    <p>- Local -</p>
                    <p>- Villages -</p>
                    <p>- Aid -</p>
                    <p>- Contact -</p>
                    <Link to='/contact' className='btn'>More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default Meetings
