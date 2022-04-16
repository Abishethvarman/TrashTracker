import { View, Text } from 'react-native'
import React from 'react'
import ResolveDisplay from '../components/Resolved/ResolveDisplay'

const ResolvedScreen = ({navigation}) => {
    return (
      <View>
        <ResolveDisplay navigation={navigation}/>
      </View>
    )
}

export default ResolvedScreen