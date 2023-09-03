/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, country, id }) {
  return (
    <Anchor to={"/city/" + id}>
      <div id="cardCityContent" className="w-[30rem] h-[23rem] pointer border-[#1c1c1c62] border-[0.167rem] bg-[#fdfdfd] text-center py-[4%] px-[1.5%] 
      sm: w-[35rem] h-[30rem] 
      md: w-[24rem] h-[24rem] px-[2.5%]">
        <img id="cardCityPhoto" src={src} alt={alt} className="w-[28rem] h-[14rem] m-[auto] border-[#1c1c1c2c] border-[0.1rem] 
        sm:w-[33rem]"/>
        <p className="text-[#4f46e5] font-[Segoe UI] text-[1.9rem] ">{text}</p>
        <p>{country}</p>
        <button className="border border-solid border-black rounded-[0.3em] text-white text-[1.3em] bg-[#4f46e5] hover:bg-purple-400 hover:text-black p-[0.4em] mt-[0.5rem] w-[70%] h-[14%]">View More</button>
      </div>
    </Anchor>
  );
}

