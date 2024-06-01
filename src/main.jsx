import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './SCSS/index.scss'
import { App } from './app'
import { store } from './core/store/store'
ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
