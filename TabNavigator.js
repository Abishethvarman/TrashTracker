import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForumScreen from './Screens/ForumScreen';
import { FontAwesome5,Entypo } from '@expo/vector-icons';
import MapScreen from './Screens/MapScreen';
import AddNewSpot from './components/NewSpot/AddNewSpot';
import LeaderboardScreen from './Screens/LeaderboardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const TabNavigator=()=>{
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: true,
        headerShown:false,
        tabBarStyle:{backgroundColor:'#5B8C2A'},
        tabBarInactiveTintColor:"#A9A9A9",
        tabBarInactiveBackgroundColor:'',
        tabBarActiveTintColor:"white",
        tabBarActiveBackgroundColor:'#5B8C29',
        tabBarHideOnKeyboard:true

    }}>
      <Tab.Screen name="Home" component={HomeScreen} Options={{
          tabBarIcon:({size,color})=>(
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
      }}/>
      <Tab.Screen name="Map" component={MapScreen} Options={{
          tabBarIcon:({size,color})=>(
            <Entypo name="globe" size={size} color={color} />
          )
      }}/>
      <Tab.Screen name="Track Trash" component={AddNewSpot} Options={{
          tabBarIcon:({color,size} )=>(
            <Entypo name="plus" size={size} color={color} />
          )
      }}/>
      <Tab.Screen name="Forum" component={ForumScreen} Options={{
          tabBarIcon:({color,size})=>(
            <Entypo name="chat" size={size} color={color} />
          )
      }}/>
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} Options={{
          tabBarIcon:({size,color})=>(
            <FontAwesome5 name="trophy" size={size} color={color} />
          )
      }}/>
    </Tab.Navigator>
  );
}

export default TabNavigator