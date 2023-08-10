
export default function CarouselCard({src, alt, text}) {
  return (
    <div className="carouselCard">
        <img className="carouselPhoto" src={src} alt={alt} />
        <p className="carouselCardCity">{text}</p>
    </div>
  )
}
