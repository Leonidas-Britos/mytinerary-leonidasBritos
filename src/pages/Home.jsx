import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiUrl";


export default function Home() {

  const [data, setData] = useState([]);

   useEffect(
    () => {
      axios(apiUrl+'cities/carousel')
        // .then((res) => console.log(res.data.data_carousel))
        .then(res => setData(res.data.data_carousel))
        .catch(err => console.log(err));
    }, //callback que NO debe retornar nada y NO puede ser asincrona
    [] //array de dependencias
    //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
    //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
    //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
  );



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
      <Carousel data={data}/>
    </div>
  );
}

