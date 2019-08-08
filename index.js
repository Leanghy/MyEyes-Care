/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";

import {name as appName} from './app.json';
import Contact from './src/components/Contact'
import MyList from './src/MyList';
import Card from './src/Card';
import App from './App';
import HomeMenu from './src/pages/HomeMenu';
import Signup from './src/pages/Signup';


// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent('HomeMenu', () => HomeMenu);
Navigation.registerComponent('Signup', () => Signup);
Navigation.registerComponent('Card', () => Card);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
