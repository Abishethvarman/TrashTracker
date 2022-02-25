import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import TrashDisplay from '../components/TrashSpots/TrashDisplay'


const TrashSpotScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        
        <TrashDisplay navigation={navigation}/>
        
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
      backgroundColor:'#50C878',
      flex:1
  }
})




export default TrashSpotScreen