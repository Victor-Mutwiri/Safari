import Slider from 'react-slick';
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick.css";
import "C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/slick-theme.css";
import './HotelCarousel.css'

/* const basePath = import.meta.env.BASE_URL || ''; */

const HotelCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      };
    
      return (
        <Slider {...settings} className='logo'>
          <div className="carousel-slide">
            <img src="../src/assets/Four-Seasons.jpg" alt="Hotel 1" />
            {/* <img src={`${basePath}/Safari Adventures/src/assets/Four-Seasons.jpg`} alt="Hotel 1" /> */}
          </div>
          <div className="carousel-slide">
            <img src="../src/assets/Ole-Sereni.png" alt="Hotel 2" />
            {/* <img src={`${basePath}/Safari Adventures/src/assets/Ole-Sereni.png`} alt="Hotel 2" /> */}
          </div>
          <div className="carousel-slide">
            <img src="../src/assets/hilton-hotels.jpg" alt="Hotel 3" />
            {/* <img src={`${basePath}/Safari Adventures/src/assets/hilton-hotels.jpg`} alt="Hotel 3" /> */}
          </div>
          <div className="carousel-slide">
            <img src="../src/assets/Kempinski.png" alt="Hotel 4" />
            {/* <img src={`${basePath}/Safari Adventures/src/assets/Kempinski.png`} alt="Hotel 4" /> */}
          </div>
        </Slider>
      );
    };

export default HotelCarousel