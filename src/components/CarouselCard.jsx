
// eslint-disable-next-line react/prop-types
export default function CarouselCard({src, alt, text}) {
  return (
    <div className="carouselCard">
        <img className="carouselPhoto" src={src} alt={alt} />
        <p className="carouselCardCityTittle">{text}</p>
    </div>
  )
}
