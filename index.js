import React from 'react';
import {AppRegistry} from 'react-native';
import AxiosProvider from 'axios';
import App from './App.jsx';
import {name as appName} from './app.json';
import {BaseURL} from './service/HostingService';

AxiosProvider.defaults.baseURL = `https://${BaseURL}/api/v1`;

AppRegistry.registerComponent(appName, () => () => <App />);
