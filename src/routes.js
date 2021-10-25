import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
// import Home from '~/pages/Login';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Signup: Signup,
      // Home: Home
    },
    {
      initialRouteName: 'Login'
    }
  )
)

export default Routes
