import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignupScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MapScreen from './Screens/MapScreen';
import SignedInStack from './navigation';
import NewSpotScreen from './Screens/NewSpotScreen';


export default function App() {
  return (
    <MapScreen/>
  );
}

