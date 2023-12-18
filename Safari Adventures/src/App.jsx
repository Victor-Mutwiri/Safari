import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Deals from './Pages/Deals/Deals'
import International from './Pages/International/International'
import Local from './Pages/Local/Local'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='deals' element={<Deals/>}/>
      <Route path='international' element={<International/>}/>
      <Route path='local' element={<Local/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
