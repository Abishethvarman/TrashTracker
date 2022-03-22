import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ChatForm from '../components/Forum/ChatForm';

const AddChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ChatForm/>
    </View>
  )
}

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.push('ForumScreen')}>
          <Ionicons name="chevron-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Insights Time</Text>
          <Text> </Text>
      </View>
)

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#0CBAA6',
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
    fontSize:20

},
})
export default AddChatScreen