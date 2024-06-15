import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './SCSS/index.scss';
import { App } from './app';
import { store } from './core/store/store';
import { customTheme } from './customTheme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider theme={customTheme}>
      <App />
    </ConfigProvider>
  </Provider>
);
