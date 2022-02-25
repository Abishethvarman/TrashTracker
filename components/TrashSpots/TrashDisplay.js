import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const TrashDisplay = ({navigation}) => {
  return (
    <View >
      
      <Header navigation={navigation}/>
      <Text>TrashDisplay</Text>
    </View>
  )
}

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="black" />
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

export default TrashDisplay