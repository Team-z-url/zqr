import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import TabIcon from './components/TabIcon';

import PortfolioScreen from './components/PortfolioScreen';
import BattleScreen from './components/BattleScreen';
import BodiesScreen from './components/BodiesScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

const tabNavigatorSettings = {
  Portfolio: {
    screen: PortfolioScreen
  },
  Battle: {
    screen: BattleScreen
  },
  Bodies: {
    screen: BodiesScreen
  }
};

const TabNavigator = createBottomTabNavigator(tabNavigatorSettings, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Portfolio') {
        iconName = 'portfolio';
      } else if (routeName === 'Battle') {
        iconName = 'battle';
      } else if (routeName === 'Bodies') {
        iconName = 'bodies';
      }

      return <TabIcon icon={iconName} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray'
  }
});

const AppNavigator = createStackNavigator(
  {
    App: TabNavigator,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    SignIn: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'Auth'
  }
);

const Contain = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    return <Contain />;
  }
}
