import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './SCSS/index.scss';
import { Provider } from 'react-redux'
import { store } from './core/store/store'

import { router } from './router/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
