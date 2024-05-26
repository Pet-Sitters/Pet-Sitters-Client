import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth } from './components/auth/Auth'
import { Profile } from './components/profile/Profile'
import ErrorPage from './pages/error-pages'
import './SCSS/index.scss'
const router = createBrowserRouter([
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
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
