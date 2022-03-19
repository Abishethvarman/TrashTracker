import * as React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Marker } from "react-native-maps";


const MapScreen = ({navigation})=> {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}></Header>
      <MapView style={styles.map} 
      initialRegion={{
        /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
      latitude: 7.95,
      longitude: 80.670837,
      latitudeDelta: 2,
      longitudeDelta: 2.4,
    }}
  >
  
  {/*marker to a nearby location */}
  <Marker
    coordinate={{
      latitude: 7.7714827145542,
      longitude: 81.6551462687416,
    },
    {
      latitude: 7.914827145542,
      longitude: 81.6551462687416,
    },
    {
      latitude: 7.7714827145542,
      longitude: 81.6551462687416,
    }}
    pinColor="green"
  />
  </MapView>
    </SafeAreaView>
  );
}

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.push('HomeScreen')}>
          <Ionicons name="chevron-back-outline" size={30} color="red" />
          </TouchableOpacity>
          
          <Text style={styles.headerText}>Trash in map</Text>
          <Text></Text>
          
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
    marginHorizontal:10,
    marginTop: StatusBar.currentHeight
  },
  map: {
    width: Dimensions.get('window').width-20,
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

export default MapScreen



// error code
// export default function MapScreen({navigation,route}) {

//   const [pin,setPin]= React.useState({latitude: 7.95,
//       longitude: 80.670837})

// return (
//   <View style={styles.container}>
//     <MapView style={styles.map} 
//     initialRegion={{
//     latitude: 7.95,
//     longitude: 80.670837,
//     latitudeDelta: 0.15,
//     longitudeDelta: 0.11,
//   }}
//      >
//          <Marker coordinate={pin}
//               pinColor="red"
//               draggable={true}
//               onDragStart={(e)=>{
//                   console.log("Drag Start",e.nativeEvent.coordinate);
                  
//               }}
//               onDragEnd={(e)=>{
//                 setPin({
//                   latitude: e.nativeEvent.coordinate.latitude,
//                   longitude: e.nativeEvent.coordinate.longitude
//                 })
//               }}
              
//           />
//           <Circle
//             center={pin}
//             radius={1000}
//           />
          
//      </MapView>
//      <View style ={styles.view17}>
//       <Button
//             title = "Add Location"
//             buttonStyle = {styles.button1}
//             titleStyle ={styles.title1}
//             onPress = {()=>{navigation. goBack('MyProductsScreen',{params:{pin:pin}})}}
//       />
//      </View>
//   </View>
// );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// text1:{fontSize:22,
//   // color:colors.button,
//   fontWeight:'bold'
// },
// button1: {
//   backgroundColor:'red',
//   alignContent:"center",
//   justifyContent:"center",
//   borderRadius:12,
//   borderWidth:1, 
//   borderColor:'yellow',
//   height:50,
//   paddingHorizontal:20,
//   width:'100%',
  
                    
// },
// view17:{marginVertical:5,
//   marginBottom:30,
 
// },
// map: {
//   width: Dimensions.get('window').width,
//   height: Dimensions.get('window').height-150,
// },
// });