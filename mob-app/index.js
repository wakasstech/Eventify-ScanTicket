/**
 * @format
 */

// index.js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import i18next from './services/i18next';
import {NativeBaseProvider} from 'native-base';

import {I18nextProvider} from 'react-i18next';

import store from './src/globalStore/store';

const ReduxProvider = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </I18nextProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
