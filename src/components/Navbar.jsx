import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
        {/**Try and find out why the Main Logo Button does not Function.Written fine */}
           <Link className='links' id="1" exact to='/'><h1>WaKeley Ministries</h1></Link>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link className='links' id="2" to='/'>Home</Link>
               </li>
               <li>
                   <Link className='links' id="3" to='/projects'>Projects</Link>
               </li>
               <li>
                   <Link className='links' id="4" to='/weeklyservices'>Weekly Services</Link>
               </li>
               <li>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}

           </div>
        </div>
    );

}

export default Navbar
