import { NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import ForumScreen from './Screens/ForumScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import TabNavigator from './TabNavigator'


const Stack = createNativeStackNavigator()
const screenOptions={
    headerShown: false
}
const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={TabNavigator}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack