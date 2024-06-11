import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './SCSS/index.scss'
import { getCurrentUser } from './core/store/auth/thunk'
import { router } from './router/routes.jsx'

export function App() {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCurrentUser())
	}, [dispatch])

	return <RouterProvider router={router} />
}