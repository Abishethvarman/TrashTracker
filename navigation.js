import { NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import TrashDisplay from './components/TrashSpots/TrashDisplay'
import ForumScreen from './Screens/ForumScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import MapScreen from './Screens/MapScreen'
import SignupScreen from './Screens/SignupScreen'
import TrashSpotScreen from './Screens/TrashSpotScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import TabNavigator from './TabNavigator'


const Stack = createNativeStackNavigator()
const screenOptions={
    headerShown: false
}
export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={TabNavigator}/>
            <Stack.Screen name='MapScreen' component={MapScreen}/>
            <Stack.Screen name='ForumScreen' component={ForumScreen}/>
            {/* <Stack.Screen name='TrashSpotScreen' component={TrashSpotScreen}/> */}
            
        </Stack.Navigator>
    </NavigationContainer>


    
)

export const SignOutStack = () => (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )

