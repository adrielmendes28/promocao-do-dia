import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

const App = () => (<Provider store={store}>
  <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

  <Routes ref={navigationRef} />
</Provider>
);

export default App;
