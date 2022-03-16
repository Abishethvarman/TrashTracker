import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignupScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MapScreen from './Screens/MapScreen';
import SignedInStack, { SignOutStack } from './navigation';
import NewSpotScreen from './Screens/NewSpotScreen';
import ForumScreen from './Screens/ForumScreen';
import LeaderboardScreen from './Screens/LeaderboardScreen';
import 'react-native-gesture-handler';
import AuthNavigation from './AuthNavigation';
import Drawer from './components/Home/Drawer';
import { LogBox } from 'react-native';
import SpotImage from './components/NewSpot/SpotImage';
import PickerSev from './components/NewSpot/Picker';
import AddCounter from './components/NewSpot/Counter';
import AddNewSpot from './components/NewSpot/AddNewSpot';
import Locate from './components/NewSpot/location';
import TrashSpotScreen from './Screens/TrashSpotScreen';
import TrashDisplay from './components/TrashSpots/TrashDisplay'
import ProfileScreen from './Screens/ProfileScreen';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by messageLogBox.ignoreAllLogs();

export default function App() {
  console.disableYellowBox = true;
  return (
    //<HomeScreen/>
    //<SignedInStack/>
  // <AuthNavigation/>
    // <SignOutStack/>
    //<Drawer/>
  //  <SpotImage/>
  //<NewSpotScreen/>
  //<PickerSev/>
  //<AddCounter/>
  //<AddNewSpot/>
  // <Locate/>
  // <TrashSpotScreen/>
  // <ForumScreen/>
  // <TrashDisplay/>
 < ProfileScreen/>

  );
}

