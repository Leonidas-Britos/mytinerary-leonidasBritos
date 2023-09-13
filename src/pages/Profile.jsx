import { useRef, useState } from "react";
import UserData from "../components/UserData";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'; // Importa SweetAlert
import user_actions from "../store/actions/users";
const { update_user } = user_actions;

export default function Profile() {
  const user = useSelector((store) => store.users.user);
  //console.log(user);
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const password = useRef("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  async function handleUpdate() {
    try {
      let data = {};
      if (name.current.value) {
        data.name = name.current.value;
      }
      if (lastName.current.value) {
        data.lastName = lastName.current.value;
      }
      if (country.current.value) {
        data.country = country.current.value;
      }
      if (photo.current.value) {
        data.photo = photo.current.value;
      }
      if (password.current.value) {
        data.password = password.current.value;
      }

      dispatch(update_user({ data }));

      // Muestra el mensaje de éxito con SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'User data has been updated successfully.',
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating user data.',
      });
    }
  }
  return (
    <div className="h-[40rem] flex flex-col flex-grow items-center justify-center md:flex-row md:justify-evenly bg-[#EBEBEB]">
      <UserData user={user} show={show} setShow={setShow} />
      {show && (
        <form className="flex flex-col items-center justify-center p-[20px] w-[360px] h-[400px] bg-red-200 sm:bg-white my-[20px] md:my-0 border-[#1c1c1c62] border-[0.167rem] rounded-[1rem]">
          <h1 className="text-[36px] font-semibold text-center mb-[10px]">
            Update!
          </h1>
          <input
            ref={name}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="name"
            id="name"
            defaultValue=""
            placeholder="Type Name"
          />
          <input
            ref={lastName}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="lastName"
            id="lastName"
            defaultValue=""
            placeholder="Type Last Name"
          />
          <input
            ref={country}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="country"
            id="country"
            defaultValue=""
            placeholder="Type Country"
          />
          <input
            ref={photo}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="photo"
            id="photo"
            defaultValue=""
            placeholder="Type Photo"
          />
          <input
            ref={password}
            type="password"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="password"
            id="password"
            defaultValue=""
            placeholder="Type Password"
          />
          <input
            type="button"
            className="w-full shadow bg-[#4f46e5] hover:bg-[#a97aff] hover:text-[black] focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded cursor-pointer"
            value="Update!"
            onClick={handleUpdate}
          />
        </form>
      )}
    </div>
  );
}