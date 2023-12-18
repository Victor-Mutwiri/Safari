import Slider from 'react-slick';
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick.css";
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick-theme.css";
import './AdventuresCarousel.css';

/* const basePath = import.meta.env.BASE_URL || ''; */

const AdventuresCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,        // Autoplay slides
        autoplaySpeed: 2500,
};
const responsiveSettings = [
  {
    breakpoint: 768, // Adjust the breakpoint as needed
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 480, // Adjust the breakpoint as needed
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 1024, // You can add more breakpoints if necessary
    settings: {
      slidesToShow: 1,
    },
  },
];
  return (
    <Slider {...settings} className=' Featured-Adventures' responsive={responsiveSettings}>
      <div className="adventures-card">
        <div className="adventures">
        {/* <img src={`${basePath}/Safari Adventures/src/assets/Safari.jpg`} alt="Ziplining" /> */}
          <img src="../src/assets/Safari.jpg" alt="Ziplining" />
          <h3>CLIFF ZIPLINING</h3>
          <span>Ngare Ndare Forest Limuru <br />
        Forest 1-Day Event</span>
          <ul>
        <li>Location: Limuru/Kenya</li>
        <li>Level: Easy/Moderate</li>
        <li>Minimum Age: 8</li>
          </ul>
          <div>
        <h3>From</h3>
        <p>Ksh 5,000/=</p>
          </div>
      </div>
      </div>
      <div className="adventures-card">
    <div className="adventures">
      <img src="../src/assets/Hiking.jpg" alt="Ziplining" />
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Hiking.jpg`} alt="Ziplining" /> */}
      <h3>Hiking Explorations</h3>
      <span>Ngare Ndare Forest Limuru <br />
        Forest 1-Day Event</span>
      <ul>
        <li>Location: Limuru/Kenya</li>
        <li>Level: Easy/Moderate</li>
        <li>Minimum Age: 8</li>
      </ul>
      <div>
        <h3>From</h3>
        <p>Ksh 5,000/=</p>
      </div>
    </div>
    </div>
    <div className="adventures-card">
    <div className="adventures">
      <img src="../src/assets/Beach Vibes.jpg" alt="Summer" />
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Beach Vibes.jpg`} alt="Summer" /> */}
      <h3>BEACH VIBES</h3>
      <span>Serene Coast <br />
        Mombasa 1-Week</span>
      <ul>
        <li>Location: MOMBASA/DIANI/WATAMU</li>
        <li>Level: Easy/Moderate</li>
        <li>Minimum Age: ALL</li>
      </ul>
      <div>
        <h3>From</h3>
        <p>Ksh 55,000/=</p>
      </div>
    </div>
    </div>
    <div className="adventures-card">
    <div className="adventures">
      <img src="../src/assets/Park Picnic.jpg" alt="Picnic" />
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Park Picnic.jpg`} alt="Picnic" /> */}
      <h3>MARA ADVENTURES</h3>
      <span>Picnic in the Heart of the Mara <br />
        Maasai Mara 4-Days/3-Nights </span>
      <ul>
        <li>Location: Samburu</li>
        <li>Level: Easy/Moderate</li>
        <li>Minimum Age: 12</li>
      </ul>
      <div>
        <h3>From</h3>
        <p>Ksh 45,000/=</p>
      </div>
    </div>
    </div>
    <div className="adventures-card">
    <div className="adventures">
      <img src="../src/assets/Park.jpg" alt="Park" />
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Park.jpg`} alt="Park" /> */}
      <h3>Park N Chill</h3>
      <span>Tsavo National Park <br />
        Tsavo 3-Days/2-Nights</span>
      <ul>
        <li>Location: Tsavo/Kenya</li>
        <li>Level: Easy</li>
        <li>Minimum Age: 12</li>
      </ul>
      <div>
        <h3>From</h3>
        <p>Ksh 35,000/=</p>
      </div>
    </div>
    </div>
    <div className="adventures-card">
    <div className="adventures">
      <img src="../src/assets/Park Resorts.jpg" alt="Ziplining" />
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Park Resorts.jpg`} alt="Ziplining" /> */}
      <h3>NIGHT AT THE PARK</h3>
      <span>Nanyuki National Park <br />
        Nanyuki 2-Days/1-Night</span>
      <ul>
        <li>Location: Nanyuki/Kenya</li>
        <li>Level: Moderate</li>
        <li>Minimum Age: 25</li>
      </ul>
      <div>
        <h3>From</h3>
        <p>Ksh 25,000/=</p>
      </div>
    </div>
    </div>
  </Slider>
  )
}

export default AdventuresCarousel