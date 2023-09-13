export default function Users({ user, show, setShow }) {
     return (
       <div className="w-[auto] h-[auto] flex flex-col justify-center items-center bg-tertiary sm:bg-white p-[20px] mt-[20px] md:mt-0 border-[#1c1c1c62] border-[0.167rem] rounded-[1rem]">
         <p className="my-2 text-center font-semibold text-[1.3rem] ]">{user.name}</p>
         <p className="my-2 text-center font-semibold text-[1.3rem] ]">{user.lastName}</p>
         <p className="my-2 text-center font-semibold text-[1.3rem] ]">{user.country}</p>
         <img className="w-auto h-auto my-2 py-[2rem] h-full object-cover border-[0.1rem] rounded border-[lightgrey]" src={user.photo} />
         {show ? (
           <input
             type="button"
             className="w-full shadow bg-[#4f46e5] hover:bg-[#a97aff] hover:text-[black] focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded cursor-pointer "
             value="Hide!"
             onClick={() => setShow(!show)}
           />
         ) : (
           <input
             type="button"
             className="w-full bg-[#4f46e5] hover:bg-[#a97aff] hover:text-[black] hover:bg-secondary focus:shadow-outline focus:outline-none text-[black] font-semibold py-2 px-4 rounded cursor-pointer"
             value="Update!"
             onClick={() => setShow(!show)}
           />
         )}
       </div>
     );
   }