import './App.css'

function App() {
  return (
    <>
      <header>
        <div className='headerHome'>
          <h3 className='h3Header'>
            My Tinerary
          </h3>
          <nav className='navPage'>
            <a className='anchorNav' href="/#/">Home</a> 
            <a className='anchorNav' href="/#/">Cities</a> 
            <div className='buttonLogin'>
            <img className='iconLoginNav' src="./public/img/user.png" alt="" />
            <a className='textButtonLogin' href="/#/">Login</a> 
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className='contentHome'>
          <div className='textAndButtonHome'>
          <h1 className='tittleArticleHome'>Find the perfect destination</h1>
          <p className='paragraphHome'>Our app will help you find the perfect path for your next <br></br> trip. With an easy-to-use interface and a host of itinerary<br></br> options, planning your next trip has never been easier.</p>
          <button className='buttonHome'>View More</button>
          </div>
          <img className='mountainImg' src="/public/img/mountain.png" alt="" />
        </div>
        
      </main>
    </>
  )
}

export default App
