import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import TrashDisplay from '../components/TrashSpots/TrashDisplay'
import { Ionicons } from '@expo/vector-icons';

const TrashSpotScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        
    </SafeAreaView>
  )
}



const Header = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.push("HomeScreen")}>
            <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Trash Spots</Text>
            <Text> </Text>
        </View>
)

const styles=StyleSheet.create({
  container:{
      backgroundColor:'#50C878',
      flex:1
  },
  headerContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:30

  },
  headerText:{
      color:'white',
      fontWeight:'700',
      marginRight:20,
      fontSize:30

  } 
})

export default TrashSpotScreen