/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;
import activity_actions from "../store/actions/activities";
const { read_activities_from_itinerary } = activity_actions;
import ActivityItinerary from "./ActivityItinerary";

export default function DetailCity({ src, alt, tittle, id, description }) {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const itineraries = useSelector(store => store.itineraries.itineraries_from_city);
  // console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(read_itineraries_from_city({ city_id: id })) },
    []
  )
  useEffect(
    () => { dispatch(read_activities_from_itinerary({ itinerary_id: id })) },
    []
  )
  return (
    <Anchor to={"/city/" + id}>
      <div id="detailCityContent" className="w-[auto] h-[auto] mx-auto flex flex-col justify-space-between bg-[#EBEBEB] 
        sm:w-[42rem] sm:h-[28rem]
        lg:w-[auto] xl:h-[auto] mx-auto flex flex-col justify-space-between bg-[#EBEBEB]
        xl:w-[auto] xl:h-[auto] mx-auto flex flex-col justify-space-between bg-[#EBEBEB] ">

        <img id="detailCityPhoto" src={src} alt={alt} className="w-[100%] h-[10rem] border-[#94A3B8] border-solid border-[0.4rem]
          sm:w-[100%] sm:h-[35rem]
          lg:w-[100%] lg:h-[auto] 
          xl:w-[100%] xl:h-[auto] border-[#94A3B8] border-solid border-[0.4rem] "/>

        <div id="boxDetailCityTittleAndDescription" className="w-auto h-[auto] px-[15%] gap-[1rem] flex flex-col 
          lg:w-auto lg:h-[40rem] px-[15%] gap-[1rem] flex flex-col
          xl:w-auto xl:h-[auto] px-[15%] gap-[1rem] flex flex-col">

          <p id="detailCityText" className="text-center text-2xl font-semibold 
            md:text-4xl
            xl:text-center text-2xl font-semibold ">
            {tittle}
          </p>
          <p id="detailCityDescription" className="">
            {description}
          </p>

          <button id="buttonViewHideItineraries" onClick={() => setShow(!show)} className="w-[auto] h-[auto] p-[1rem] mx-auto my-[2.2rem] text-[1.3rem] border-2 border-solid border-black rounded-lg font-semibold text-[1.4rem] bg-[#4f46e5] cursor-pointer text-white hover:bg-[#a97aff] hover:text-[black]
          md:w-[10rem] md:h-[5.5rem] text-[1.6rem] 
          lg:w-[auto] lg:h-[auto] p-[1rem] mx-auto my-[2.2rem] text-[1.3rem] border-2 border-solid border-black rounded-lg font-semibold text-[1.4rem] bg-[#4f46e5] cursor-pointer text-white
          xl:w-[auto] xl:h-[auto] p-[1rem] mx-auto my-[2.2rem] text-[1.3rem] border-2 border-solid border-black rounded-lg font-semibold text-[1.4rem] bg-[#4f46e5] cursor-pointer text-white">
            {show ? 'Hide Itineraries ↑' : 'View Itineraries ↓'}</button>
        </div>
        
        <div id="boxViewItineraries" className="w-[auto] h-[auto] gap-[4rem] mb-[2rem] flex flex-col items-center bg-[#EBEBEB]
        lg:lg:w-[auto] lg:h-[auto] gap-[4rem] mb-[2rem] flex flex-col items-center bg-[#EBEBEB]
        xl:w-[auto] xl:h-[auto] gap-[4rem] mb-[2rem] flex flex-col items-center bg-[#EBEBEB]">
          {show && itineraries.map(itinerary =>
          
            <div id="ViewitineraryCard" key={itinerary._id} className="w-[50rem] h-[auto] pb-[1rem] flex flex-col items-center justify-around border-solid border-[#94A3B8] border-[0.2rem] rounded-[1rem] bg-[#fdfdfd]
            lg:w-[50rem] lg:h-[auto] pb-[1rem] flex flex-col items-center justify-around border-solid border-[#94A3B8] border-[0.2rem] rounded-[1rem] bg-[#fdfdfd]
            xl:w-[50rem] xl:h-[auto] pb-[1rem] flex flex-col items-center justify-around border-solid border-[#94A3B8] border-[0.2rem] rounded-[1rem] bg-[#fdfdfd]">
              
              <p key={itinerary._id} className="text-[2rem]">{itinerary.name}</p>
              <img id="viewItineraryPhoto" src={itinerary.photo} alt={itinerary.name} className="w-[auto] h-[auto] px-[3rem] rounded-[1rem]
             lg:w-[auto] lg:h-[auto] px-[3rem] rounded-[1rem]
             xl:w-[auto] xl:h-[auto] px-[3rem] rounded-[1rem]" />
              
              <div id="viewItineraryDetails" className="w-[100%] px-[3rem] py-[0.8rem] flex flex-row justify-between items-center rounded-[1rem]
              lg:w-[100%] px-[3rem] py-[0.8rem] flex flex-row justify-between items-center rounded-[1rem]
              xl:w-[100%] px-[3rem] py-[0.8rem] flex flex-row justify-between items-center rounded-[1rem]">

                <p id="iconHeart" className="gap-[0.5rem] flex text-[2rem] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="pink" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[2.5rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                  {itinerary.likes}</p>
                <button id="buttonDetails" onClick={() => setShowDetails(!showDetails)}>
                  {showDetails ?

                    <svg id="iconArrowUp" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[4rem] hover:stroke-purple-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    :
                    <svg id="iconArrowDown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[4rem] hover:stroke-purple-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>}
                </button>
              </div>
              {showDetails ?
                <div id="usersHashDurPrice" className="h-[3rem] w-[100%] mb-[2.5rem] flex flex-row justify-around content-between bg-[#fdfdfd]
                lg:h-[3rem] lg:w-[100%] mb-[2.5rem] flex flex-row justify-around content-between bg-[#fdfdfd]
                xl:h-[3rem] xl:w-[100%] mb-[2.5rem] flex flex-row justify-around content-between bg-[#fdfdfd] ">
                  <div id="userProfile">
                    <p id="usertext" className="flex flex-col items-center text-[1.4rem] 
                    lg:flex flex-col items-center text-[1.4rem]
                    xl:flex flex-col items-center text-[1.4rem] "><b>User:</b></p>
                    <img id="userPhoto" src="/public/img/user_example.png" alt="" />
                  </div>
                  <p className="flex flex-col items-center text-[1.4rem] "><b>Hashtags:</b>{itinerary.tags}</p>
                  <p className="flex flex-col items-center text-[1.4rem] "><b>Duration:</b>{itinerary.duration} hs</p>
                  <p className="flex flex-col items-center text-[1.4rem] "><b>Price: </b>${"💵".repeat(itinerary.price)}</p>

                </div> : null}
              <button id="buttonShowActivities" onClick={() => setShowActivities(!showActivities)} className="w-[auto] h-[auto]  mx-auto  p-[1rem] border-2 text-[1rem] border-solid border-black rounded-lg font-semibold text-[1.4rem] text-white  bg-[#4f46e5] cursor-pointer hover:bg-[#a97aff] hover:text-[black]">{showActivities ? 'Hide Activities ↑' : 'View Activities ↓'}</button>
              {showActivities ?
                <ActivityItinerary itinerary_id={itinerary._id} />
                : null}
            </div>
          )}
        </div>
      </div>
    </Anchor>
  );
}

