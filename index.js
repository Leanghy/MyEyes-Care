/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";

import { name as appName } from './app.json';
import Contact from './src/components/Contact'
import MyList from './src/MyList';
import Card from './src/Card';
import App from './App';
import HomeMenu from './src/pages/HomeMenu';
import Signup from './src/pages/Signup';
import Appointment from './src/pages/Appointment';
import Doctor from './src/pages/Doctor';
import Patient from './src/pages/Patient';
import SideMenu from './src/pages/SideMenu';


// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent('HomeMenu', () => HomeMenu);
Navigation.registerComponent('Signup', () => Signup);
Navigation.registerComponent('Card', () => Card);
Navigation.registerComponent('Appointment', () => Appointment);
Navigation.registerComponent('Doctor', () => Doctor);
Navigation.registerComponent('Patient', () => Patient);
Navigation.registerComponent('SideMenu', () => SideMenu);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});


// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//         stack:{
//             id:'AppStock',
//             children:[
//                 {
//                     component:{
//                         name:'SibeMenu',
//                         options:{
//                             topBar:{
//                                 title:{
//                                     text:'HOME MENU'
//                                 }
//                             }
//                         }
//                     },

//                 }
//             ]
//         },

//     }
//   });
// });


// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       sideMenu: {
//                 left: {
//                   component: {
//                     name: 'SideMenu'
//                   }
//                 },
//                 center: {
//                   component: {
//                     name: 'HomeMenu'
//                   }
//                 }
//               }
//     }
//   });
// });
