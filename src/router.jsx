import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDeatil from "./pages/CityDetail";
import MainLayout from "./layouts/MainLayout";
import FormSignUp from "./pages/FormSignUp"
import FormSignIn from "./pages/FormSignIn"
import Profile from "./pages/Profile"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/signin", element: <SignIn /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/profile", element: <Profile /> },
            { path: "/cities", element: <Cities /> },
            { path: "/city/:city_id", element: <CityDeatil /> },
            { path: "/auth/signup", element: <FormSignUp /> },
            { path: "/auth/signin", element: <FormSignIn /> }
        ]
    },
]);

export default router;