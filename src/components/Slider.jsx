import Carousel from 'react-bootstrap/Carousel';
//Import the Picture for the Carosel here

import crossmountains from '../assets/crossmountains.jpg';
import Frost from '../assets/frostyMnt.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import MountStream from '../assets/mntEverest.jpg';
import Flag from '../assets/Albanianflag.jpg'
import '../components/SliderStyles.css';
import Berat from '../assets/berat.jpg';


/*

<Carousel.Caption>
        <div className="text-center">

          <h3>God Gave us a Vision </h3>
          <p>To Reach the unreachable </p>
          </div>
        </Carousel.Caption>

 <Carousel.Caption>
        <div className="text-center">
          <h3>Giving Food to the Hungry </h3>
          <p>Seeing Lives Transformed </p>
          </div>
        </Carousel.Caption>

         <Carousel.Caption>
        <div className="text-center">

          <h3>Preaching the Gospel </h3>
          <p>
            A Vision for the Lost People of Albania .
          </p>
          </div>
        </Carousel.Caption>

         <div className="text-center">

        <h3>Preaching the Gospel </h3>
        <p>
          A Vision for the Lost People of Albania .
        </p>
        </div>

*/



function Slider() {
  return (
    <div className="container">



    <Carousel fade>
      <Carousel.Item>

        <img
          className="first-image"
          src={Frost}
          alt=""
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="second-image"
          src={MountStream}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="third-image"
          src={Berat}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;
