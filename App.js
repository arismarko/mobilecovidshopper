import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AlertScreen from "./src/screens/AlertScreen";

import { Provider as StoresProvider } from './src/context/StoreContext';
import { Provider as ItemsProvider} from './src/context/ItemsContext';
import { Item } from 'native-base';

const navigator = createStackNavigator(
  {
    Find: HomeScreen,
    Alert: AlertScreen 
  },
  {
    initialRouteName: "Find",
    defaultNavigationOptions: {
      title: "CovidShopper"
    }
  }
);

const App = createAppContainer(navigator);


export default () => {
  return (
    <StoresProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </StoresProvider>
  )
};