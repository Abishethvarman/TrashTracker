import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
 

const AddCleanUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>AddCleanUp</Text>
    </View>
  )
}

const Header = ({navigation: { goBack }})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> goBack()}>
            <Text></Text>
          <Ionicons name="chevron-back-outline" size={30} color="blue" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Insights Time</Text>
          <Text> </Text>
      </View>
)

const styles=StyleSheet.create({
  headerText:{
    color:'red'
  }
})
export default AddCleanUp

