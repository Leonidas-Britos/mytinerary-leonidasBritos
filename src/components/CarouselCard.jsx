
// eslint-disable-next-line react/prop-types
export default function CarouselCard({src, alt, text}) {
  return (
    <div className="width-[19rem] h-[17.2rem] cursor-pointer border-solid border-[#1c1c1c62] border-[0.167rem] bg-[#ffffff] text-center pt-[2%] pr-[2%] pb-[%0] pl-[2%]">
        <img className="w-[16rem] h-[12rem] border-[#1c1c1c2c] border-solid border-[0.1rem]" src={src} alt={alt} />
        <p className="text-[#4f46e5] font-[Segoe UI] text-[1.9rem] pt-[0.7rem]">{text}</p>
    </div>
  )
}
