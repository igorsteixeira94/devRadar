import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
          headerTitleAlign: 'center',
        },
      },
      Profile,
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: null,
        headerStyle: {
          backgroundColor: '#805EB8',
        },
        headerTintColor: '#fff',
      },
    },
  ),
);

export default Routes;
