import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function Navbar() {
  let [show, setShow] = useState(false)
  let mail = useSelector((store)=>store.users.user?.mail);
  let dispatch = useDispatch()

  return (
    <header className="border-b-2 border-black flex justify-start">
      <div className="flex items-center justify-space-around h-[9rem] w-[98.90vw] border-b-[0.11em] border-[rgba(0, 0, 0, 0.233)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4f46e5" className="w-[7rem] cursor-pointer
        sm:hidden
        md:hidden
        lg:hidden
        
        " onClick={() => setShow(!show)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        {show ? (
          <div className="flex gap-[1rem] ml-[0.6rem] 
          sm:hidden
          md:hidden">
            <Anchor to="/home">
              <p className="text-[1.7rem] text-[white] border-2 border-solid border-black rounded-[0.5rem] hover:bg-[#a97aff] hover:text-[black] group hover:text-black px-5 py-1 bg-[#4f46e5] sm:hidden" >Home</p>
            </Anchor>
            <Anchor to="/cities">
              <p className="text-[1.7rem] text-[white] border-2 border-solid border-black rounded-[0.5rem] hover:bg-[#a97aff] hover:text-[black] group hover:text-black px-5 py-1 bg-[#4f46e5] sm:hidden" >Cities</p>
            </Anchor>
            <Anchor to="/signin">
              <p className="text-[1.7rem] text-[white] border-2 border-solid border-black rounded-[0.5rem] hover:bg-[#a97aff] hover:text-[black] group hover:text-black px-5 py-1 bg-[#4f46e5] sm:hidden" >Login</p>
            </Anchor>

          </div>

        ) : (null)}
        <img src="./public/img/my.png" alt="" className="w-[8rem] absolute right-[1.8%]
        sm:hidden" />



        <div className="sm:flex h-[9rem] w-[98.90vw] justify-between items-center gap-[2rem] pl-[4%] pr-[4%] border-b-[0.11em] border-[rgba(0, 0, 0, 0.233)]">
          <div className="sm:">
            <Anchor to="/home" className="sm:">
              <img src="./public/img/logo_mytinerary.png" alt="logo company" className="
            sm:flex w-[25rem] hidden
            lg: w-[28rem]"/>
            </Anchor>
          </div>
          <nav className="sm:flex justify-center items-center gap-[0.8rem] hidden">
            <Anchor to="/home" className="sm:text-[#fff] text-[1.8rem] non-italic font-semibold no-unerline">
              <div className="sm:w-[8rem] h-[4rem]  bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
                <img className="sm:iconHomeNav" />
                Home
              </div>
            </Anchor>
            <Anchor to="/cities" className="sm:text-[#fff] text-[1.8rem] non-italic font-semibold no-underline">
              <div className="sm:w-[8rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
                <svg className="sm:w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                Cities
              </div>
            </Anchor>

            <Anchor to="/signin" className="sm:text-[#fff] text-[1.8rem] non-italic font-semibold no-underline">
              <div className="sm:w-[8rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
                <svg className="sm:w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Login
              </div>
            </Anchor>

            {mail && <span onClick={() => dispatch(signout())}>Sign Out</span>}
            
          </nav>
        </div>
      </div>
    </header> 
  )
}
