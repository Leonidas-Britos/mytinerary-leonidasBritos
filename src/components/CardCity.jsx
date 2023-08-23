import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, id }) {
  return (
    <Anchor to={"/city/" + id}>
      <div className="carouselCard">
        <img className="carouselPhoto" src={src} alt={alt} />
        <p className="carouselCardCityTittle">{text}</p>
      </div>
    </Anchor>
  );
}
