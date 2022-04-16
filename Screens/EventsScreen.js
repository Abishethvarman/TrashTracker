import { View, Text } from 'react-native'
import React from 'react'
import EventDisplay from '../components/Event/EventDIsplay'

const EventsScreen = ({navigation}) => {
  return (
    <View>
      <EventDisplay navigation={navigation}/>
    </View>
  )
}

export default EventsScreen