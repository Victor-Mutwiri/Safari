import './International.css'

function International(){
  return (
    <>
    <section>
      <h2>Tours</h2>
      <p>Find your perfect group tour, Family tour, or private tour right here.  
      Group <br /> tours fill up fast, secure your booking with a small deposit.</p>
    </section>
    <section className='packages'>
    <div className='package Bali'>
      <img src="../src/assets/Bali.jpg" alt="Bali" />
      <div className='description'>
        <h3>Bali Adventures</h3>
        <span>Length: 11 Days</span>
        <span>No.of Activities <br /> 30+</span>
        <span>Group Size <br /> 10-25</span>
      </div>
    </div>

    <div className='package Thailand'>
      <img src="../src/assets/Thailand.jpg" alt="Thailand" />
      <div className='description'>
        <h3>Thailand Adventures</h3>
        <span>Length: 14 Days</span>
        <span>No.of Activities <br /> 20+</span>
        <span>Group Size <br /> 10-25</span>
      </div>
    </div>

    <div className='package Asia'>
      <img src="../src/assets/Asia.jpg" alt="Asia" />
      <div className='description'>
        <h3>Backpacking Asia</h3>
        <span>Length: 7 Days</span>
        <span>No.of Activities <br /> 10+</span>
        <span>Group Size <br /> 10+</span>
      </div>
    </div>

    <div className='package Italy'>
      <img src="../src/assets/Italy.jpg" alt="Italy" />
      <div className='description'>
        <h3>Italy Escapades</h3>
        <span>Length: 7 Days</span>
        <span>No.of Activities <br /> 10+</span>
        <span>Group Size <br /> 5+</span>
      </div>
    </div>

    <div className='package Egypt'>
      <img src="../src/assets/Egypt.jpg" alt="Egypt" />
      <div className='description'>
        <h3>Egypt Escapades</h3>
        <span>Length: 5 Days</span>
        <span>No.of Activities <br /> 10</span>
        <span>Group Size <br /> 15</span>
      </div>
    </div>

    <div className='package Jamaica'>
      <img src="../src/assets/Jamaica.jpg" alt="Jamaica"/>
      <div className='description'>
        <h3>Jamaica Escapades</h3>
        <span>Length: 5 Days</span>
        <span>No.of Activities <br /> 10+</span>
        <span>Group Size <br /> 10</span>
      </div>
    </div>

    <div className='package Switzerland'>
      <img src="../src/assets/Skydiving Switzerland.jpg" alt="Switzerland"/>
      <div className='description'>
        <h3>SkyDiving Switzerland</h3>
        <span>Length: 1 Day</span>
        <span>No.of Activities <br /> 1</span>
        <span>Group Size <br /> 5+</span>
      </div>
    </div>

    <div className='package Europe'>
      <img src="../src/assets/European Soccer Experience.jpg" alt="Europe"/>
      <div className='description'>
        <h3>European Soccer Experience</h3>
        <span>Length: 5 Days</span>
        <span>No.of Activities <br /> 5</span>
        <span>Group Size <br /> 15</span>
      </div>
    </div>
    </section>
    
    </>
  )
}

export default International