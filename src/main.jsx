import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth } from './components/auth/Auth'
import { Profile } from './components/profile/Profile'
import ErrorPage from './pages/error-pages'
import './SCSS/index.scss';
import { Provider } from 'react-redux'
import { store } from './core/store/store'

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
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
