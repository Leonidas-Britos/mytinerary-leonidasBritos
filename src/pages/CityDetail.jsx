/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_city } = city_actions
import DetailCity from '../components/DetailCity'

export default function CityDetail() {
  const { city_id } = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store => store.cities.city)
  useEffect(
    () => {
      dispatch(read_city({ id: city_id }))
    },[]);
  // console.log(city);
  return (
    <div className='w-[100%] h-[auto] justify-center bg-[green]'>
      <DetailCity src={city.photo} alt={city_id} tittle={city.city} city={city} id={city_id} description={city.description}
      />
    </div>


  )
}