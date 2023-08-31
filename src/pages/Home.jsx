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
    <div className="bg-[#EBEBEB] flex content-space-between items-start gap-[3rem] pt-[5%] pl-[3%] pr-[3%] pb-[3%]">
      <div className="align-center flex flex-col gap-[2rem] w-[41vw] h-[115vh] rounded-[1rem] border-[#1c1c1c62] border-[0.167rem] bg-[#fdfdfd] px-[1.5%] py-[1.5%]">
        <h1 className="text-[#1c1c1c] text-[2rem] non-italic font-normal leading-snug">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h1>
        <p className="text-[grey] text-[1.2rem] non-italic font-normal leading-normal" >
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <img className="w-[90%] h-[70%] border-[0.1rem] border-[lightgrey]" src="./public/img/itinerary.jpg" alt="" />
        <Anchor to="/cities" className="flex justify-center items-center">
          <button className="w-[16rem] h-[3.8rem] py-[3%] px-[2%] justify-center items-center gap-[1rem] text-[#fff] text-[1.7rem] non-italic font-medium leading-normal roundend-[0.9rem] bg-[#4f46e5] cursor-pointer flex hover:bg-[#a97aff] hover:text-[black]">View More</button>
        </Anchor>
      </div>
      <Carousel data={carousel} />
    </div>
  );
}

