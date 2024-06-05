import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './SCSS/index.scss'
import { App } from './app'
import { store } from './core/store/store'
import {ConfigProvider} from "antd";

const MAIN_COLOR = '#C896FF';
const HOVER_COLOR = '#ceb5ec';
const BUTTON_COLOR = "#320064";
const BUTTON_HOVER_COLOR = "#C8A5FC"

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ConfigProvider
			theme={{
				components: {
					Slider: {
						handleColor: MAIN_COLOR,
						handleActiveColor: MAIN_COLOR,
						dotBorderColor: MAIN_COLOR,
						dotActiveBorderColor: MAIN_COLOR,
						trackBg: MAIN_COLOR,
						trackHoverBg: MAIN_COLOR,
					},
					Button: {
						colorPrimary: BUTTON_COLOR,
						colorPrimaryHover: BUTTON_HOVER_COLOR,
					},
					InputNumber: {
						colorPrimary: MAIN_COLOR,
						colorPrimaryHover: MAIN_COLOR,
					},
					Switch: {
						colorPrimary: MAIN_COLOR,
						colorPrimaryHover: HOVER_COLOR,
					},
					Radio: {
						colorPrimary: MAIN_COLOR,
						colorPrimaryHover: HOVER_COLOR,
						colorPrimaryActive: MAIN_COLOR,
					},
				},
			}}
		>
			<App />
		</ConfigProvider>
	</Provider>
)
