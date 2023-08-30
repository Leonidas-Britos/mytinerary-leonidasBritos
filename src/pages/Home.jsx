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
    <div className="contentHome">
      <div className="textAndButtonHome">
        <h1 className="tittleArticleHome">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h1>
        <p className="pHome">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <img className="imageHome" src="./public/img/itinerary.jpg" alt="" />
        <Anchor to="/cities">
          <button className="buttonViewMoreHome">View More</button>
        </Anchor>
      </div>
      <Carousel data={carousel} />
    </div>
  );
}

