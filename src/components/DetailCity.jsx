/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;

export default function DetailCity({ src, alt, text, country, id }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(store => store.itineraries.itineraries_from_city);
  // console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(
    () => {dispatch(read_itineraries_from_city({ city_id:id }))},
    []
  )
  return (
    <Anchor to={"/city/" + id}>
      <div className="w-[70%] h-[50%] border-2 border-solid border-black flex flex-col justify-center m-auto">
        <img className="w-[100%] h-[50%] m-auto" src={src} alt={alt} />
        <p className="text-center font-semibold text-2xl">{text}</p>
        <p>{country}</p>
        <button onClick={() => setShow(!show)} className="w-[7rem] h-[3rem] border-2 border-solid border-black rounded-lg mx-auto my-[2.2rem] font-semibold text-xl bg-[#4f46e5] cursor-pointer text-white ">{show ? ('Hide') : ('+Info')}</button>
        {show && itineraries.map(each=><p key={each._id}>{each.name}</p>)}
      </div>
    </Anchor>
  );
}

