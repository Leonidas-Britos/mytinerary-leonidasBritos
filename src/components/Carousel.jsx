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
      <div className="w-[52vw] h-[115vh] py-[6%] px-[2%] border-solid rounded-[1rem] border-[0.167rem] border-[#1c1c1c62] flex flex-row justify-center flex-wrap align-center gap-[2rem] mb-[3rem] bg-[#fdfdfd]">
        {data.slice(counter, counterTo).map((each) => (
          <CarouselCard
            key={each.id}
            src={each.photo}
            alt={each.id}
            text={each.city}
          />
        ))}
        <div className="flex flex-row justify-center gap-[30rem] pd-[10%]">
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
