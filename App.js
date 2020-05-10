import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as StoresProvider } from './src/context/StoreContext';
import { Provider as ItemsProvider} from './src/context/ItemsContext';
import { Provider as PointsProvider} from './src/context/PointsContext';

import StoreFinderScreen from './src/screens/StoreFinderScreen';
import HomeScreen from './src/screens/HomeScreen';
import FindScreen from './src/screens/FindScreen';
import AlertScreen from "./src/screens/AlertScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Find: FindScreen,
    Alert: AlertScreen,
    Points: StoreFinderScreen
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
    <StoresProvider>
      <ItemsProvider>
        <PointsProvider>
         <App />
        </PointsProvider>
      </ItemsProvider>
    </StoresProvider>
  )
};