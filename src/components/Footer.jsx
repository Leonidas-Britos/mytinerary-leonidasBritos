export default function Footer() {
  return (
    <div className="myFooter">
      <div className="footerSection1">
        <div className="groupLogo">
          <img className="logoCompany" src="./public/img/logo_mytinerary_black.png" alt="logo company" />
        </div>
        <div className="groupLink1">
          <p className="pFooter">ABOUTS US</p>
          <p className="pFooter">CONTACT US</p>
          <p className="pFooter">WORK WITH US</p>
        </div>
        <div className="groupLink2">
          <p className="pFooter">SERVICES</p>
          <p className="pFooter">FAQ </p>
          <p className="pFooter">PRIVACY</p>
        </div>
        <div className="groupLink3">
          <p className="pFooter">HELP</p>
          <p className="pFooter">SUPPORT</p>
          <p className="pFooter">TERMS OF USE</p>
        </div>
      </div>
      <hr />
      <div className="footerSection2">
        <div className="socialNetworks">
          <a href="#">
            <img className="iconFooter" src="./public/icons/facebook.png" alt="icon facebook"
            />
          </a>
          <a href="#">
            <img className="iconFooter" src="./public/icons/instagram.png" alt="icon instagram"
            />
          </a>
          <a href="#">
            <img className="iconFooter" src="./public/icons/twitter.png" alt="icon twitter"
            />
          </a>
          <a href="#">
            <img className="iconFooter" src="./public/icons/youtube.png" alt="icon youtube"
            />
          </a>
        </div>
        <div className="copyrightFooter">
          <p>© 2022 MyTinerary. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
