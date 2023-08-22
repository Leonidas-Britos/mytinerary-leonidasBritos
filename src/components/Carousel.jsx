import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import axios from "axios";

export default function Carousel() {
  useEffect(
    () => {
      axios("/data.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, //callback que NO debe retornar nada y NO puede ser asincrona
    [] //array de dependencias
    //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
    //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
    //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
  );

  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);
  const [data, setData] = useState([]);
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
      <div className="carouselHomeContent">
        {data.slice(counter, counterTo).map((each) => (
          <CarouselCard
            key={each.id}
            src={each.photo}
            alt={each.id}
            text={each.city}
          />
        ))}
        <div className="groupArrowsCarousel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-20 cursor-pointer hover:stroke-purple-800"
            onClick={prev_slide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-20 cursor-pointer hover:stroke-purple-800"
            onClick={next_slide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
