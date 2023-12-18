import AdventuresCarousel from "../../Components/AdventuresCarousel"
import Carousel from "../../Components/Carousel"
import HotelCarousel from "../../Components/HotelCarousel"
import './Home.css'


function Home () {
  return (
    <>
    <Carousel/>
    {/* <section className=".centered-section">
      <img src="../src/assets/logo-color.svg" alt="Logo" width={1000} height={300}/>
    </section> */}
    <section className="brands">
      <h2>Brands We Work With ...</h2>
      <HotelCarousel/>
    </section>
    <section>
      <h2>Featured Adventures</h2>
      <span>Our Most Popular Trips</span>
      <AdventuresCarousel/>
    </section>
    <section>
      <h2>CONSCIOUS CONSERVATION-LED JOURNEYS</h2>
      <span>
        AMADI creates sophisticated yet adventurous African experience that change the perceptions of <br />
        travellers and make a positive impact on communities and ecosystems. We are a purpose-led venture <br />
        committed to net-positive travel; a travel that is respectful, conscious and uplifting-for both travellers and <br />
        the destinations they visit.
      </span>
    </section>
    </>
    
  )
}

export default Home