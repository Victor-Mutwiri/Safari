
import Slider from 'react-slick';
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick.css";
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick-theme.css";
import './Carousel.css'

/* const basePath = import.meta.env.BASE_URL || ''; */

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Autoplay slides
        autoplaySpeed: 2500,
        responsive: [
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
              slidesToShow: 3,
            },
          },
        ],
};

return (
  <div>
  <Slider {...settings} className='slider'>
    <div className="carousel-container">
      <img src="../src/assets/Elephant-Wildlife.jpg" alt="Game Drive"/>
      {/* <img src={`${basePath}/Safari Adventures/src/assets/Elephant-Wildlife.jpg`} alt="Game Drive" /> */}
    </div>
    <div>
      <img src="../src/assets/Springs.jpg" alt="Game Drive"/>
      {/* <img src={`${basePath}/src/assets/Springs.jpg`} alt="Game Drive" /> */}
    </div>
    <div>
      <img src="../src/assets/Giraffe In Kenya.jpg" alt="Coast"/>
      {/* <img src={`${basePath}/src/assets/Giraffe In Kenya.jpg`} alt="Coast" /> */}
    </div>
    <div>
      <img src="../src/assets/Leken Adventure.jpg" alt="Coast"/>
      {/* <img src={`${basePath}/src/assets/Leken Adventure.jpg`} alt="Coast" /> */}
    </div>
    {/* Add more slides as needed */}
  </Slider>
  <div className="text-overlay">
    <span>Dream | Explore | Discover</span>
    <span>Connecting Likeminded Adventurers to the perfect Adventure</span>
</div>
</div>
);
};

export default Carousel;