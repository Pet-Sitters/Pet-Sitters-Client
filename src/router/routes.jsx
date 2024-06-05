import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../Layout/layout'
import Login from '../components/auth/login/login'
import Registration from '../components/auth/registration/registration'
import CalculatorPage from '../pages/CalculatorPage.jsx'
import ErrorPage from '../pages/error-pages'
import { PromoPage } from '../pages/promoPage/promoPage'
import ProfilePage from "../pages/ProfilePage.jsx";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			,
			{
				path: '',
				element: <PromoPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'registration',
				element: <Registration />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'login',
				element: <Login />,
				errorElement: <ErrorPage />,
			},

			{
				path: 'calc',
				element: <CalculatorPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'Profile',
				element: <ProfilePage />,
				errorElement: <ErrorPage />,
				children: [
					{
						path: '1',
						element: <CalculatorPage />,
						errorElement: <ErrorPage />,
					}
				]
			},

		],
	},
])
