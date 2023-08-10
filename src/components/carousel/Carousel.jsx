import CarouselCard from "./CarouselCard"
import { useState } from "react";

const data = [
  {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
  {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
  {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
  {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
  {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
  {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
  {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
  {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
  {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
  {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
  {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
  {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
  {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
  {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
  {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
  {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
]

export default function Carousel() {
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0);
      setCounterTo(4)
    }else {
      setCounter(counter+4);
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (0 >= counter) {
      setCounter(data.length-4);
      setCounterTo(data.length);
    } else {
      setCounter(counter-4);
      setCounterTo(counterTo-4)
    }

  }
  return (
    <div>
        <div className="carouselHome">
          {data.slice(counter, counterTo).map(each=> <CarouselCard key={each.id} src={each.photo} alt={each.id} text={each.city} />)}
          <div className="groupArrowsCarousel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-20 cursor-pointer hover:stroke-purple-800" onClick={prev_slide}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-20 cursor-pointer hover:stroke-purple-800" onClick={next_slide}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

          </div>
        </div>   
    </div>
  )
}



