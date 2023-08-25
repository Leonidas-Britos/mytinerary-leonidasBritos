/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, country, id }) {
  return (
    <Anchor to={"/city/" + id}>
      <div className="cityCard">
        <img className="cityCardPhoto" src={src} alt={alt} />
        <p className="cityCardCityTittle">{text}</p>
        <p>{country}</p>
        <button className="cityCardButton">View More</button>
      </div>
    </Anchor>
  );
}

