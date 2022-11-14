import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Projects'
import LogoImage from '../components/LogoImage';
import Slider from '../components/Slider';
import Text from '../routes/Text';
import Carousel from '../components/Carousel.jsx';
import { countries } from "../components/Data.jsx";

import '../styles/Projects.css';


/**
 * So the problems stands as this.
 * The only worKing image Carousel has been put into the projects part of the website
 *The problem with this is that the styling for the image carousel is completely off, The words and the Slider buttons are way down the page. Then there is a huge
 gap between the words slider buttons and the icons that indicate the current picture. Then there is also a massive gap between the icons and the footer.
 Another problem is that the entire Carousel meaning the buttons and the images are completely off. They are up on the left hand side of the Screen when they should be
 centered. There are three things to conclude here. Eigther the styling in the Image Slider is completely off, the stylin in the Projects' css file is off, or the styling
 in one of the css files for eigther Image Slider or Projects is clashing with the styling in one or the other file. There could also be potential clashes with other css
 files from the other components that have been imported into the Projects file.

 The most reasobable explanation would be that the projects' css file is clonflicting with the css file for the Image Carousel.

 Now that we have a hypothesis for what is going wrong and different possible causes for the problem we now need to cut down the possibilities and diagnose the issue
 from the identified source of the integration conflict.

First of all we will start with the posbility of the css files from the other components such as the navbar conflicting with the style sheets of that of the Image
Carousel and the Projects file.

We will remove them one by one and shortly followed by the removal of them all bar the Image Courousel until we have a clearer Diagnosis.


So the problem scope has been narrowed. It is not the other componets style sheets conflicting with the Porjects' or the Image Carousels sheet.

Now it can only reasonably be two things. the Project style sheet clashing with the Image Carousel's style sheet.

The Image Carousel functions normal with reasonably good quality styling in isolation but when placed into the Projects component things start to become disfunctional.

So there are two options:
Calibrate the Carousels style sheet or Resolve conflicts in the Projects CSS file.

The approach will start with the later.

First of all the Carousel will be wrapped in a div and then we can move this div around and ensure that it has the right parent and children with the right layout and
positioning rule set.

Now the plan is to go through the Project CSS file and if there is none try and find out what is dictating the style and layout for the page.
It could be the defualt layout in which case it will be the absolute layout. This layout just places everything where it has space and positions
things from the top left hand corner outwards.

So next what we need to do is add a CSS file that will specify the styling for the Projects page and position organise all the styled components
that have been imported and rendered in the return statement in the JSX.
Once this has been done we must conduct extensive tests and iterate and improve the current organisation and styling for the Image Carousel as
well as the Projects' style sheet

So what seems to be going on is that the default styling is controling the layout of everything on the Projects page. This means that the image
Carousel with all it's divs and componets delicately placed over each other is being overriden and the default layout is spreading everything
This seems to be the case because each component of the Image Carousel appears to be spread out evenly between each ohter.
Now this is important because if we move the styling that is in the Image Carousel's stylesheet and place it into the Stylesheet for the Projects
file then we can improve things slightly. Next if we gain a deep understanding of how the other stylesheets function for similar layouts then we
can use that same doctrine for styling the Projects file.


So change of plans. The code for the Image Carousel will not be moved to the style sheet for the projects file.
Instead we will change the default layout and organisation of the Projects fill in order to add some more predictable behaviour.

So we

 */


//Put the Logo Image bac after some experimentation
/*
 <LogoImage heading='Humanitarian Projects.' text='Sponsorships' />

*/
const Projects = () => {
    return (

            <Carousel images={countries} />

    );

}

export default Projects
