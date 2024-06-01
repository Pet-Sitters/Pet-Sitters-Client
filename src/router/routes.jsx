import {createBrowserRouter} from "react-router-dom";
import {Auth} from "../components/auth/Auth";
import ErrorPage from "../pages/error-pages";
import {Profile} from "../components/profile/Profile";
import CalculatorPage from "../pages/CalculatorPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'profile',
        element: <Profile />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'calc',
        element: <CalculatorPage/>,
        errorElement: <ErrorPage />,
    }
])