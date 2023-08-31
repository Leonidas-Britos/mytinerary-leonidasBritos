import { Link as Anchor } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b-2 border-black">
      <div className="flex h-[9rem] w-[98.90vw] justify-center items-center gap-[25rem] p-[1%] pl-[6%] pr-[6%] border-b-[0.11em] border-[rgba(0, 0, 0, 0.233)]">
        <div className="logoAndText">
          <Anchor to="/home">
            <img className="w-[90%]" src="./public/img/logo_mytinerary.png" alt="logo company" />
          </Anchor>
        </div>
        <nav className="flex justify-center items-center gap-[1rem]">
          <Anchor to="/home" className="text-[#fff] text-[1.8rem] non-italic font-semibold no-unerline">
            <div className="w-[9rem] h-[4rem]  bg-[#4f46e5] border-solid border-[0.06em #0d0d0d7e] rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
              <img className="iconHomeNav" />
              Home
            </div>
          </Anchor>
          <Anchor to="/cities" className="text-[#fff] text-[1.8rem] non-italic font-semibold no-underline">
            <div className="w-[9rem] h-[4rem] bg-[#4f46e5] border-solid border-[0.06em #0d0d0d7e] rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
              <svg className="w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              Cities
            </div>
          </Anchor>

          <Anchor to="/signin" className="text-[#fff] text-[1.8rem] non-italic font-semibold no-underline">
            <div className="w-[9rem] h-[4rem] bg-[#4f46e5] border-solid border-[0.06em #0d0d0d7e] rounded-[1rem] flex justify-center items-center hover:bg-[#a97aff] hover:text-[black] group hover:text-black">
              <svg className="w-10 stroke-[white] group-hover:stroke-[black]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Login
            </div>
          </Anchor>
        </nav>
      </div>
    </header>
  );
}
