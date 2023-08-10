import H3Tittle from "../components/header/H3Tittle";
import Navbar from "../components/header/Navbar";

export default function Header() {
  return (
    <header>
      <div className="headerHome">
        <H3Tittle/>
        <Navbar/>
      </div>
    </header>
  );
}
