import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import activity_actions from "../store/actions/activities"

const { read_activities_from_itinerary } = activity_actions

export default function Activities({ itinerary_id }) {

  const dispatch = useDispatch()
  const [activity, setActivity] = useState([])

  useEffect(
    () => {
      dispatch(read_activities_from_itinerary({ itinerary_id: itinerary_id }))
      .then(response => setActivity(response.payload.activities_from_itinerary))
      .catch(err => console.log(err))
    },
    []
  )

  return (
    <div className="pt-[2rem] gap-[1rem] flex flex-row flex-wrap justify-center items-center">{activity?.map(each => <div className="wrap m-7 w-[12rem] h-[auto] border-dashed border-gray-500 border-[0.2rem] pb-[0.7rem]" key={each._id}><img src={each.photo} alt={each._id} className="w-[230px] h-[150px] pb-[0.7rem]" /><p className="text-center font-semibold px-[0.3rem]">{each.name}</p></div>)}</div>
  )
}