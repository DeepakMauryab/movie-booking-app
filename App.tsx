import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store, {persistor} from './src/redux/store';
import Main from './src/routes/Main';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import colors from './src/constants/Color';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.theme} />
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
