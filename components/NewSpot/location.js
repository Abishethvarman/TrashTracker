
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import * as Location from 'expo-location';

export default function Locate() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region,setRegion]=useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }

)

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
//--------------------
  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
 
  // // console.log(text);
  // console.log(location);
//----------------------

const getLoc =() =>{
  //console.log("press",location.coords)
  let latitude= location.coords.latitude
  let longitude=location.coords.longitude
  setRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          })
}


const sendLoc =() =>{
  
  let latitude= location.coords.latitude
  let longitude=location.coords.longitude
console.log("Use these variables to send current location(",latitude, ",",longitude,")")
}


  return (
    <View style={styles.container}>
      
      
      <Button title='locatida su' onPress={getLoc}/>
      <TextInput style={styles.TextInput}> {region.latitude}</TextInput>
    </View>
    //<Text style={styles.paragraph}>{text}</Text>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
 });
 

 