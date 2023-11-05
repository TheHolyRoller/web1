import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import MeetingCards from './routes/MeetingCards';
import Newsletter from './routes/Newsletter';
import YouTubeServices from './components/YouTubeService.jsx';

import Button from 'react-bootstrap/Button';
import './routes/App.css';



import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

function App() {
  return (
    <>
    <Routes>


<Route path='/' element={<Home/>} />
<Route path='/projects' element={<Projects/>}/>
<Route path='/weeklyservices' element={<MeetingCards/>}/>
{/*<Route path='/newsletter' element={<Newsletter/>}/>*/}


</Routes>

    </>
  );
}

export default App;
