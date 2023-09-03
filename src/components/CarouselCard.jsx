
// eslint-disable-next-line react/prop-types
export default function CarouselCard({src, alt, text}) {
  return (
    <div key={alt} id="carouselCard" className="w-[16rem] h-[16rem] py-[2%] px-[2%] flex flex-col border-solid border-[#1c1c1c62] border-[0.167rem] bg-[#ffffff] text-center cursor-pointer
    sm:w-[auto] h-[auto]
    md:w-[20rem] h-[15rem]
    lg:w-[16rem] h-[7rem] 
    xl:">
        <img id="carouselPhoto"src={src} alt={alt} className="w-[15rem] h-[8rem] border-[#1c1c1c2c] border-solid border-[0.1rem]
        sm:w-[15rem] h-[8rem]
        md:w-[17rem] h-[10.1rem]
        lg:w-[12rem "/>
        <p id="carouselText" className="text-[#4f46e5] font-[Segoe UI] text-[1.6rem] pt-[0.7rem]">{text}</p>
    </div>
  )
}
