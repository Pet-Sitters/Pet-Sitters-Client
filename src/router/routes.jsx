import { createBrowserRouter } from 'react-router-dom'

import { Account } from '../Layout/Account/Account'
import { Layout } from '../Layout/layout'
import { MyPets } from '../pages/Account/MyPets/MyPets'
import { Orders } from '../pages/Account/Orders/Orders'
import PersonalData from '../pages/Account/PersonalData/PersonalData.jsx'
import PetForm from '../pages/Account/PetForm/PetForm'
import { Settings } from '../pages/Account/Settings/Settings'
import { Sitters } from '../pages/Account/Sitters/Sitters'
import CalculatorPage from '../pages/Home/Calculator/CalculatorPage'
import { Home } from '../pages/Home/Home'
import ErrorPage from '../pages/error-pages'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Home />,
				errorElement: <ErrorPage />,
			},

			{
				path: 'account/',
				element: <Account />,
				errorElement: <ErrorPage />,
				children: [
					{
						path: 'personal/',
						element: <PersonalData />,
						errorElement: <ErrorPage />,
					},

					{
						path: 'my-pets/',
						element: <MyPets />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'add-pets/',
						element: <PetForm />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'my-order/',
						element: <Orders />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'my-sitter/',
						element: <Sitters />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'settings/',
						element: <Settings />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'calc/',
						element: <CalculatorPage />,
						errorElement: <ErrorPage />,
					},
				],
			},
		],
	},
])
