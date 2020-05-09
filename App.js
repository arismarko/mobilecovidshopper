import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AlertScreen from "./src/screens/AlertScreen";

import { Provider as StoresProvider } from './src/context/StoreContext';
import { Provider as ItemsProvider} from './src/context/ItemsContext';
import { Provider as PointsProvider} from './src/context/PointsContext';
import StoreFinderScreen from './src/screens/StoreFinderScreen';

const navigator = createStackNavigator(
  {
    Find: HomeScreen,
    Alert: AlertScreen,
    Points: StoreFinderScreen
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
        <PointsProvider>
         <App />
        </PointsProvider>
      </ItemsProvider>
    </StoresProvider>
  )
};