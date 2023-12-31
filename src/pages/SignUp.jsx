import { useRef, useEffect, useState } from "react";
import Users from "../components/Users";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2"; // Importa SweetAlert
import user_actions from "../store/actions/users";
const { read_6_users } = user_actions;

export default function SignUp() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_6_users());
  }, [reload]);

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "users/signup", data);
      setReload(!reload);
      console.log(data);
      // Muestra el mensaje SweetAlert cuando los datos se actualicen con éxito
      Swal.fire({
        icon: "success",
        title: "Datos actualizados con éxito",
        text: "Los datos del usuario se han actualizado correctamente.",
      });
    } catch (error) {
      console.log(error);
      // Muestra un mensaje de error si ocurre un problema
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al actualizar los datos del usuario.",
      });
    }
  }
  return (
    <div id="SignUpContent" className="w-[100%] h-[100%] gap-[3rem] px-[3%] py-[4%] flex flex-col justify-center bg-[#EBEBEB]">
      <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white mx-auto border-[#1c1c1c62] border-[0.167rem] rounded-[1rem]">
        <h1 className="text-[36px] font-semibold text-center mb-[10px]">
          Sign Up!
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
          placeholder="Type country"
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
          ref={mail}
          type="text"
          className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
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
          className="mb-5 w-full shadow bg-[#4f46e5] hover:bg-[#a97aff] hover:text-[black] focus:shadow-outline focus:outline-none text-white font-bold focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded cursor-pointer"
          value="Sign Up!"
          onClick={handleSignUp}
        />
        <p>
          Already have an account?{" "}
          <Anchor
            className="text-[20px] font-semibold text-[#4f46e5] hover:text-[#a97aff] cursor-pointer"
            to="/signin"
          >
            Sign in!
          </Anchor>
        </p>
      </form>
    </div>
  );
}




