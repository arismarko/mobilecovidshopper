import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";

import { StoreProvider } from './src/context/StoreContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "CovidShopper"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};