import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import AxiosProvider from 'axios';
import store from './redux/store';
import App from './App.jsx';
import {name as appName} from './app.json';
import {BaseURL} from './service/HostingService';

AxiosProvider.defaults.baseURL = `http://${BaseURL}/api/v1`;

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <App />
  </Provider>
));
