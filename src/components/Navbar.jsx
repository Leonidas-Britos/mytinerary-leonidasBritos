import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;
import Swal from 'sweetalert2';

export default function Navbar() {
  let [show, setShow] = useState(false)
  let mail = useSelector((store) => store.users.user?.mail);
  let dispatch = useDispatch()

  const handleSignout = () => {
    // Mostrar una alerta de confirmación en inglés antes de realizar el cierre de sesión
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, sign out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar el cierre de sesión aquí
        dispatch(signout());

        // Ocultar el botón Sign Out y mostrar el botón Sign In nuevamente
        setShow(false);

        // Mostrar una alerta de éxito en inglés después de cerrar sesión
        Swal.fire({
          title: 'Sign Out Successful!',
          text: 'You have been signed out.',
          icon: 'success',
          timer: 2000, // La alerta se cierra automáticamente después de 2 segundos
          showConfirmButton: false,
        });
      }
    });
  };

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
            <div className="sm:w-[11rem] gap-[0.5rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-[black] cursor-pointer" onClick={() => dispatch(signout())}>
              <p className="sm:text-[#fff] text-[1.7rem] non-italic font-semibold no-underline group hover:text-[black]"> Sign Out</p>
            </div>
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
  {mail ? (
    <Anchor to="/profile" className="sm:text-[#fff] text-[1.8rem] non-italic font-semibold no-underline">
      <div className="sm:w-[8rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
        <svg className="sm:w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        Profile
      </div>
    </Anchor>
  ) : null}
  {mail ? (
    <div className="sm:w-[11rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-[black] cursor-pointer" onClick={handleSignout}>
      <svg className="sm:w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
      <p className="sm:text-[#fff] text-[1.7rem] non-italic font-semibold no-underline group hover:text-[black]"> Sign Out</p>
    </div>
  ) : null}
  
  {!mail ? (
    <Anchor to="/signin">
      <div className="sm:w-[9rem] h-[4rem] bg-[#4f46e5] border-2 border-solid border-black rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-[black] cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 stroke-[white] group-hover:stroke-[black]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
        <p className="sm:text-[#fff] text-[1.7rem] non-italic font-semibold no-underline group hover:text-[black]">Sign In</p>
      </div>
    </Anchor>
  ) : null}
</nav>
        </div>
      </div>
    </header>
  )
}


