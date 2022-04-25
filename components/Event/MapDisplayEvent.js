import * as React from 'react';
import MapView, { Callout, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Marker,BottomSheetModal } from "react-native-maps";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { TouchableRipple } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';


const MapDisplayEvent = ({navigation})=> {

  const route = useRoute();
    const {event} = route.params;
    console.log(event);


  return (
   <SafeAreaView>
   <Header navigation={navigation}></Header>
     <MapView 
      style={styles.map} 
      initialRegion={{
        /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
      latitude: 7.95,
      longitude: 80.670837,
      latitudeDelta: 2,
      longitudeDelta: 2.4,
    }}
  >
  
   {/*marker to a nearby location */}
  {event &&
            <Marker 
            key={event.id}
            
    
    coordinate={{
      latitude: event.latitude ,
      longitude: event.longitude
    }}
    pinColor="red"
    // image={{uri:event.TitleImage}}
    /> 
    } 
    
  {/* latitude: 7.914827145542,
    longitude: 81.6551462687416,

 latitude: 7.7714827145542,
 longitude: 81.6551462687416, */}

  
  </MapView> 
  </SafeAreaView>
    
  );
}

const Header = ({navigation:{goBack}})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="red" />
          </TouchableOpacity>
          
          <Text style={styles.headerText}>Clean Up event venue</Text>
          <Text></Text>
          
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection:'column',
    marginHorizontal:10,
    marginTop: StatusBar.currentHeight
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-50,
    marginBottom:0,
    marginTop:0
  },
  headerContainer:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

},
headerText:{
    color:'black',
    fontWeight:'700',
    marginRight:20,
    fontSize:20

},
mapMarker:{
  flex:1
}
});

export default MapDisplayEvent