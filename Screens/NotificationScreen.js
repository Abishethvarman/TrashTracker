import { View, Text } from 'react-native'
import React from 'react'
import NewUserNotification from '../components/Notification/NewUserNotification'

const NotificationScreen = ({navigation}) => {
  return (
    <View>
      <NewUserNotification navigation={navigation}/>
    </View>
  )
}

export default NotificationScreen