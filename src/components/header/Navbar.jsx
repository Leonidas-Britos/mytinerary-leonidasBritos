export default function Navbar() {
  return (
    <nav className="navPage">
          <div className="buttonHomeNav">
            <img className="iconHomeNav"/>
            <a className="textButtonHome" href="/#/">
              Home
            </a>
          </div>
          <div className="buttonCities">
            <img className="iconCitiesnNav" src="./public/img/city.png" alt="" />
            <a className="textButtonCities" href="/#/">
              Cities
            </a>
          </div>
          <div className="buttonLogin">
            <img className="iconLoginNav" src="./public/img/user2.png" alt="" />
            <a className="textButtonLogin" href="/#/">
              Login
            </a>
          </div>
        </nav>
  )
}
