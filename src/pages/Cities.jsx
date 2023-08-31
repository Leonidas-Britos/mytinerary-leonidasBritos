import { useState,useEffect,useRef } from 'react'
import CardCity from '../components/CardCity'
import { useSelector,useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector(store=> store.cities.cities)
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()
  //console.log(cities);
  useEffect(
    ()=> {
      dispatch(read_cities({ text:text.current?.value }))
    },[reEffect]
  )
  function handleFilter() {
    //console.log(text.current.value);
    setReEffect(!reEffect)
  }
  return (
    <div className='w-[100%] flex flex-wrap justify-between	py-[7%] border-solid border-black border-2 gap-[3rem]'>
    <>
    <input className='border-[0.125rem] border-black border-2 rounded-[0.3rem] w-[30%] h-[2.5rem]' ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} />
    <div className='flex flex-wrap justify-between gap-[3rem] px-[5%]'>
    {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
    </div>
    
    </>
    </div>
  )
}