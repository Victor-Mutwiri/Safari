/* import mainLogo from './assets/logo-color.svg' */
/* import {Link} from 'react-router-dom' */
import './Navbar.css'
import 'C:/Users/dell/Desktop/Safari/Safari Adventures/src/index.css'
function Navbar () {
  return (
    <>
    <nav className='nav'>
        {/* <img src={mainLogo} alt="Colored Logo" width={250}/> */}
        <a href="">Safari Adventures</a>
        {/* <Link to='/'>Home</Link>
        <Link to='/local'>Local</Link>
        <Link to='/international'>International</Link>
        <Link to='/deals'>Deals</Link>
        <Link to='/about'>About</Link> */}
        <ul className='links'>
            <li><a href="/">Home</a></li>
            <li><a href="/local">Local</a></li>
            <li><a href="/international">International</a></li>
            <li><a href="/deals">Top Deals</a></li>  
            <li><a href="/about">About</a></li>
        </ul>
        <button className='button'>
        <a href="/contact">Contact Us</a>
        </button>
    </nav>
    
    </>
  )
}

export default Navbar
