import './Footer.css'

function Footer () {
  return (
    
    <footer>
    <span>
        <h2>HOLIDAY TOUR & TRAVELS</h2>
        <p>Kenya's leading tour and travels <br/> Booking website,Over 30,000 <br/> packages worldwide.</p>
    </span>
    <span>
        <h2>KENYA'S LEADING TOUR AND <br/>TRAVEL COMPANY</h2>
        <p>Deals@bonfireadventures.com <br/>Nairobi, Kenya</p>
        <h3>PHONE: +254712345678</h3>
    </span>
    <span className="access">
        <h2>QUICK ACCESS</h2>
        <div className="Quick">
          <a href="/">Home</a>
          <a href="/deals">Top Deals</a>
          <a href="/about">About</a>
        </div>
    </span>
    <span className="follow">
        <h2>FOLLOW US</h2>
        <p>Join the thousands of other followers <br/> on our social platforms and get our <br/>latest offers</p>
        <div className="social">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
    </span>
    </footer>
    
  )
}

export default Footer