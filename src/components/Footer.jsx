export default function Footer() {
  return (
    <div className="w-[98.93vw] flex flex-col justify-between bg-[#0d0d0d] border-solid border-[#0d0d0d]">
      <div className="flex items-center justify-center p-[5%] h-[30vh] gap-[15%]">
        
        <div className="flex flex-col gap-[1rem] hover:cursor-pointer">
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold" >
            ABOUTS US</p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            CONTACT US</p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            WORK WITH US</p>
        </div>
        <div className="flex flex-col gap-[1rem] hover:cursor-pointer">
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            SERVICES</p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            FAQ </p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            PRIVACY</p>
        </div>
        <div className="flex flex-col gap-[1rem] hover:cursor-pointer">
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            HELP</p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            SUPPORT</p>
          <p className="text-[white] text-[0.9rem] font-light 
          sm:text-[1.2rem] font-semibold">
            TERMS OF USE</p>
        </div>
      </div>
      <hr className="w-[97.9vw"/>
      <div className="flex justify-center">
        <div className="h-[22vh] flex items-center justify-center gap-[2.2rem] content-center">
          <a href="#">
            <img className="border-solid border-[white] border-[0.14rem] rounded-[70%] bg-[#fff] w-[3.2rem]" src="./public/icons/facebook.png" alt="icon facebook"
            />
          </a>
          <a href="#">
            <img className="border-solid border-[white] border-[0.14rem] rounded-[70%] bg-[#fff] w-[3.2rem]" src="./public/icons/instagram.png" alt="icon instagram"
            />
          </a>
          <a href="#">
            <img className="border-solid border-[white] border-[0.14rem] rounded-[70%] bg-[#fff] w-[3.2rem]" src="./public/icons/twitter.png" alt="icon twitter"
            />
          </a>
          <a href="#">
            <img className="border-solid border-[white] border-[0.14rem] rounded-[70%] bg-[#fff] w-[3.2rem]" src="./public/icons/youtube.png" alt="icon youtube"
            />
          </a>
        </div>
        {/* <div className="self-end text-[white] text-[0.7rem] pr-[1%] pl-[5%] pb-[0.5%]">
          <p>© 2022 MyTinerary. All rights reserved</p>
        </div> */}
      </div>
    </div>
  );
}
