/* eslint-disable react/prop-types */
import CarouselCard from "./CarouselCard";
import { useState } from "react";

export default function Carousel({ data }) {
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0);
      setCounterTo(4);
    } else {
      setCounter(counter + 4);
      setCounterTo(counterTo + 4);
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (0 >= counter) {
      setCounter(data.length - 4);
      setCounterTo(data.length);
    } else {
      setCounter(counter - 4);
      setCounterTo(counterTo - 4);
    }
  }
  return (
    <div>
      <div id="carouselComponent" className="w-[36rem] h-[46rem] pl-[3.5%] py-[3%] gap-[1.2rem] mb-[30rem] flex flex-row flex-wrap bg-[#fdfdfd] border-solid rounded-[1rem] border-[0.167rem] border-[#1c1c1c62]
      sm:w-[auto] h-[auto] px-[4%] py-[5%] gap-[3rem] mb-[8rem] justify-center
      md:w-[auto] h-[auto] gap-[1rem] mb-[15%] pt-[3%] mb-[89rem] 
      lg:w-[37rem] h-[45rem] mb-[89rem] pl-[1%] pr-[1%] py-[2%] mb-[50rem]
      xl:w-[37rem]">
        {data.slice(counter, counterTo).map((each) => (
          <CarouselCard
            key={each._id}
            src={each.photo}
            alt={each._id}
            text={each.city}
          />
        ))}
        <div id="carouselButtons" className="flex flex-row justify-center gap-[22rem]
        sm:gap-[auto]
        md:gap-[auto]
        lg:gap-[auto]
        xl: ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-20 cursor-pointer hover:stroke-purple-800" onClick={prev_slide}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-20 cursor-pointer hover:stroke-purple-800" onClick={next_slide}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
