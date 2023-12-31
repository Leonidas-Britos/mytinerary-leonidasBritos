/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiUrl";
import { useSelector, useDispatch } from "react-redux";
import city_actions from '../store/actions/cities';
const { read_carousel } = city_actions;

export default function Home() {

  const [data, setData] = useState([]);
  const carousel = useSelector(store=>store.cities.carousel)
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      if (carousel.length===0) {
        dispatch(read_carousel())
      }
    },        //callback que NO debe retornar nada y NO puede ser asincrona
    []     //array de dependencias
    //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
    //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
    //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
    
    );
console.log(carousel);
  return (
    <div id="HomeContent" className="w-[100%] h-[100%] gap-[3rem] px-[3%] py-[4%] flex flex-col justify-center bg-[#EBEBEB] 
    md:
    lg:flex-row flex-wrap
    xl:flex-row flex-nowrap"> 

      <div id="boxItinerariesHome" className="w-[auto] h-[45rem] mb-[1rem] gap-[2rem] flex flex-col border-[#1c1c1c62] border-[0.167rem] rounded-[1rem] bg-[#fdfdfd] 
      sm:w-[38rem] sm:h-[50rem] px-[1%] m-[0%] gap-[0rem] 
      md:w-[53rem] md:h-[auto] py-[2%] m-[auto] gap-[0rem] justify-center items-center
      lg:w-[28rem] lg:h-[44rem] py-[2%] m-[0%] gap-[0rem] flex-row
      xl:w-[38rem] xl:h-[39rem] py-[2%]">
        <h1 id="titleItinerariesBoxHome" className="text-[#1c1c1c] text-[2rem] text-[Segoe UI] non-italic font-normal leading-snug">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h1>
        <p id="textItinerariesBoxHome" className="text-[grey] text-[1.2rem] non-italic font-normal leading-normal" >
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <img id="imgItinerariesBoxHome" src="./public/img/itinerary.jpg" alt="" className="w-[90%] h-[70%] border-[0.1rem] border-[lightgrey]
        sm:h-[25rem]
        md:h-[80vh]
        lg:h-[16rem]
        xl: 
        "/>
        <Anchor to="/cities" className="flex justify-center items-center">
          <button id="buttonItinerariesBoxHome" className="w-[16rem] h-[3.8rem] py-[3%] px-[2%] justify-center items-center gap-[1rem] text-[#fff] text-[1.7rem] non-italic font-medium leading-normal border-2 border-solid border-black rounded-[0.5rem] bg-[#4f46e5] cursor-pointer flex hover:bg-[#a97aff] hover:text-[black]">View More</button>
        </Anchor>
      </div>
      <Carousel data={carousel} />
    </div>
  );
}

