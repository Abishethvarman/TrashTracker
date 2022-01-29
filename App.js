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


export default function App() {
  return (
    //<HomeScreen/>
    //<SignedInStack/>
   <AuthNavigation/>
  // <SignOutStack/>
  );
}

