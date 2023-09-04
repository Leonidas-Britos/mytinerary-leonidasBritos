/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;

export default function DetailCity({ src, alt, tittle, id, description }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(store => store.itineraries.itineraries_from_city);
  // console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(read_itineraries_from_city({ city_id: id })) },
    []
  )
  return (
    <Anchor to={"/city/" + id}>
      <div id="detailCityContent" className="w-[30rem] h-[auto] mx-auto flex flex-col justify-space-between bg-[red] border-solid border-[orange] border-[0.3rem] 
        sm: w-[42rem] h-[28rem]
        md: w-[46rem] h-[30rem]
        lg:
        xl:w-[98vw] h-[50rem]">
        <img id="detailCityPhoto" src={src} alt={alt} className="w-[100%] h-[10rem] 
          sm:w-[100%] h-[35rem]
          xl:"/>
        <div id="boxDetailCityTittleAndDescription" className="w-8rem h-[17rem] flex flex-col px-[15%]
          xl:w-30rem">
          <p id="detailCityText" className="text-center font-semibold text-2xl
            md:text-4xl">
            {tittle}
          </p>
          <p id="detailCityDescription" className="">
            {description}
          </p>
          <button id="buttonViewHideItineraries" onClick={() => setShow(!show)} className="w-[13rem] h-[6rem] border-2 text-[1.5rem] border-solid border-black rounded-lg mx-auto my-[2.2rem] font-semibold text-[1.4rem] bg-[#4f46e5] cursor-pointer text-white 
          md: w-[10rem] h-[5.5rem] text-[2.3rem]">
          {show ? ('Hide Itineraries') : ('View Itineraries')}</button>

          
        </div>
        <div id="boxViewItineraries" className="w-[100%] h-[auto] gap-[4rem] mb-[2rem] flex flex-col items-center bg-[blue]">
          {show && itineraries.map(itinerary => 
            
            <div id="ItineraryCard" key={itinerary._id} className="h-[40rem] w-[50rem] flex flex-col items-center justify-around border-solid border-[yellow] border-[0.2rem] bg-[#fdfdfd]">
                <p key={itinerary._id} className="text-[2rem]">{itinerary.name}</p>
                <img src={itinerary.photo} alt={itinerary.name} className="w-[40rem]"/>
                <p>Price: {itinerary.price}</p>
                <p>Duration: {itinerary.duration}</p>
                <p>Tags: {itinerary.tags}</p>
                
            </div>
            
            
            
            )}
        </div>


      </div>
    </Anchor>
  );
}

