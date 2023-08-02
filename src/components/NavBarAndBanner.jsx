export default function NavBarAndBanner() {
  return (
    <header>
      <div className="headerHome">
        <h3 className="h3Header">My Tinerary</h3>
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
      </div>
    </header>
  );
}
