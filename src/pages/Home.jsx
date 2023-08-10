import Carousel from "../components/Carousel";
import { Link as Anchor } from "react-router-dom";

export default function Home() {
  return (
    <div className="contentHome">
      <div className="textAndButtonHome">
        <h1 className="tittleArticleHome">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h1>
        <p className="pHome">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <img className="imageHome" src="./public/img/itinerary.jpg" alt="" />
        <Anchor to="/cities">
          <button className="buttonViewMoreHome">View More</button>
        </Anchor>
      </div>
      <Carousel />
    </div>
  );
}

