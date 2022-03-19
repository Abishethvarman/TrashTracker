import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';

const EditProfileScreen = ({navigation: { goBack }}) => {
  return (
    <View style={styles.container}>
    <View style={styles.Header}>
        <AntDesign name="back" size={24} color="black" onPress={() => goBack()}/>
      <Text>EditProfileScreen</Text>
      </View>
      <Locatetion/>
    </View>
  )
}



export const Locatetion =() => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}




const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"orange",
        
        
    },
    Header:{
        flexDirection:'row',
        marginTop:20
    }
})
export default EditProfileScreen