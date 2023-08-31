import { useState, useEffect, useRef } from 'react'
import CardCity from '../components/CardCity'
import { useSelector, useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector(store => store.cities.cities)
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()
  //console.log(cities);
  useEffect(
    () => {
      dispatch(read_cities({ text: text.current?.value }))
    }, [reEffect]
  )
  function handleFilter() {
    //console.log(text.current.value);
    setReEffect(!reEffect)
  }
  return (


    <div className='w-[100%] flex flex-wrap py-[7%] gap-[0.5rem] bg-[#EBEBEB]'>
      <>
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-[5%]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input className='border-[0.125rem] rounded-[0.3rem] w-[30%] h-[2.5rem]' ref={text} type="text" name="text" id="text" placeholder='Search your city' onKeyUp={handleFilter} />
        


        <div className='flex flex-wrap justify-between gap-[3rem] px-[5%] py-[5%]'>
          {cities.map(each => <CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
        </div>

      </>
    </div>
  )
}