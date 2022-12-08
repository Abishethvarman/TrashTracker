import * as React from 'react';
import MapView, { Callout, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Marker,BottomSheetModal } from "react-native-maps";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { TouchableRipple } from 'react-native-paper';
import { ImageBackground } from 'react-native-web';
import moment from 'moment';


const MapScreen = ({navigation})=> {

  const [spot,setSpot] = useState()

  useEffect(() => {
      try {
          const getTrashSpot =query((collection(db, 'spots')),orderBy("createAt", "desc"))
          // collection(db, 'spots')
          
          onSnapshot(getTrashSpot,(snapshots)=>{
              let spotARR = [];
              snapshots.docs.map((doc)=>{

                  spotARR.push({...doc.data(),id:doc.id})
                  // console.log(doc.id);
              

              })
            setSpot(spotARR)
              

          })

           
      } catch (error) {

          let spotARR = [];
          setSpot(spotARR)

      }


  }, [])

  //////////////////////////////////////////////
  const [event,setEvent] = useState()

  useEffect(() => {
      try {
          const getEventSpot =query((collection(db, 'events')),orderBy("createAt", "desc"))
          // collection(db, 'spots')
          
          onSnapshot(getEventSpot,(snapshots)=>{
              let eventARR = [];
              snapshots.docs.map((doc)=>{

                  eventARR.push({...doc.data(),id:doc.id})
                  // console.log(doc.id);
              

              })
            setEvent(eventARR)
              

          })

           
      } catch (error) {

          let eventARR = [];
          setEvent(eventARR)

      }


  }, [])

    //////////////////////////////////////////////
    const [resolve,setResolve] = useState()

    useEffect(() => {
        try {
            const getResolveSpot =query((collection(db, 'resolves')),orderBy("createAt", "desc"))
            // collection(db, 'spots')
            
            onSnapshot(getResolveSpot,(snapshots)=>{
                let resolveARR = [];
                snapshots.docs.map((doc)=>{
  
                    resolveARR.push({...doc.data(),id:doc.id})
                    // console.log(doc.id);
                
  
                })
              setResolve(resolveARR)
                
  
            })
  
             
        } catch (error) {
  
            let resolveARR = [];
            setEvent(resolveARR)
  
        }
  
  
    }, [])



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
  {spot && spot.map((spots) => (
            <Marker 
            key={spots.id}
            
    coordinate={{
      latitude: spots.latitude ,
      longitude: spots.longitude
    }}
    title={"Spot: "+spots.place}
    description={"Message of the uploader: " +spots.caption+" @"+moment(spots.createAt.toDate()).format('MMMM Do YYYY, h:mm a')+"."}
    pinColor="red"
    >
 
    </Marker> 
    )) } 
    

     {/*marker to a nearby location */}
     {event && event.map((events) => (
            <Marker 
            key={events.id}
            
    
    coordinate={{
      latitude: events.latitude ,
      longitude: events.longitude
    }}
    title={"Need to be clean: "+events.place}
    description={"Cleaning happening on "+moment(events.CleanUpdate.toDate()).format('MMMM Do YYYY, h:mm a')}
    pinColor="green"
    >

    </Marker> 
    )) } 
    

       {/*marker to a nearby location */}
       {resolve && resolve.map((resolves) => (
            <Marker 
            key={resolves.id}
            
    
    coordinate={{
      latitude: resolves.latitude ,
      longitude: resolves.longitude
    }}
    title={"Cleaned: "+resolves.place}
    description={moment(resolves.createAt.toDate()).format('MMMM Do YYYY, h:mm a')}
    pinColor="blue"
    >

    </Marker> 
    )) } 
  {/* latitude: 7.914827145542,
    longitude: 81.6551462687416,

 latitude: 7.7714827145542,
 longitude: 81.6551462687416, */}

  
  </MapView> 
  </SafeAreaView>
    
  );
}

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.push('HomeScreen')}>
          <Ionicons name="chevron-back-outline" size={30} color="#045c5d" />
          </TouchableOpacity>
          
          <Text style={styles.headerText}>Map In Action</Text>
          <Text></Text>
          
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdecef',
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
    color:'#045c5d',
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