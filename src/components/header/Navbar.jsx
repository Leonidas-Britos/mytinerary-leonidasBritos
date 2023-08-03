export default function Navbar() {
  return (
    <nav className="navPage">
          <a className="anchorNav" href="/#/">
            Home
          </a>
          <a className="anchorNav" href="/#/">
            Cities
          </a>
          <div className="buttonLogin">
            <img className="iconLoginNav" src="./public/img/user.png" alt="" />
            <a className="textButtonLogin" href="/#/">
              Login
            </a>
          </div>
        </nav>
  )
}
