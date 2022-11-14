/* This will be a Container to render the Youtube and Meeting Card Elements.

This way we can render both of them with their respective Css Files as well as their rundered elements and at the same time sort and
and array the layout of those elements in this file.


*/
import './MeetingCards.css';
import MeetingCards from './MeetingCards';
import {Link} from 'react-router-dom';
import YouTubeService from './YouTubeService';
import Footer from './Footer';


import React from 'react';
import { useState } from "react";

export default function Container(


    return(

        <div className='container'>
        <MeetingCards/>

        <YouTubeService/>

        </div>


    );

)
