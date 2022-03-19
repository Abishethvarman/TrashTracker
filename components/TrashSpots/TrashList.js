// import { View, Text, StatusBar,StyleSheet, TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
// import React,{useEffect,useState} from 'react';
// import { Ionicons, AntDesign } from '@expo/vector-icons'; 
// import { collection, onSnapshot,query ,where} from '@firebase/firestore'
// import { db } from '../../firebase'
// import {useRoute} from '@react-navigation/native'

// const DestinationList = ({ navigation}) => {
//     const [pPlace, setPPlace] = useState([])
    

//     const route = useRoute();
//     const { uid} = route.params;

//     const getTrashSpot = () =>
//     {
//         const places = collection(db, 'spots')
//         const q = query(places,where("uid","==",uid))

//         onSnapshot(q, (snapshot) =>
//         {
//             setPPlace((snapshot.docs.map((place) => ({id: place.id, ...place.data()} ))))
      
//         })

        
//         // console.log(place_name)
//     }

//     useEffect(() => {
//         getTrashSpot();
//     })

//     return (
//         <View style={Styles.container}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
//             </TouchableOpacity>
  
//             <View style={Styles.headerWrapper}>
//                 <Text style={[Styles.heading, { fontWeight: "bold" }]}>Explore </Text> 
//                 <Text style={Styles.heading}>{ place_name}</Text>
//             </View>
  
//             <View style={Styles.destination}>
  
//                 <ScrollView >
//                     {pPlace.map((place,index) => (
                        
//                         <TouchableOpacity key={index} onPress={() => {
//                             navigation.navigate('TripPlanScreen',
//                                 {
//                                     place_id: place.id,
//                                     imgURL: place.imgURL,
//                                     place_name: place.d_name,
//                                     budget:place.budget
//                             })
                                
//                         }
//                         }   >
  
//                         <ImageBackground  style={Styles.suggestImg}              
//                       source={{uri:place.imgURL}}
//                     imageStyle={{ borderRadius: 20 }} >
                    
//                     <View style={Styles.suggestTextWrapper}>
                    
//                         <View style={Styles.catogary}>
//                                     <Text style={Styles.destinationText}>{place.category }</Text>
//                         </View>
  
//                         <View style={[Styles.suggestplace]}>
//                             <Text style={Styles.suggestplaceText}>{ place.d_name}</Text>
//                         </View>
                        
//                         <View style={Styles.catogaryWrapper}>
  
//                             <View style={[Styles.durationWrapper]}>
//                                 <AntDesign name="clockcircle" size={13} color="#19B4BF" />
//                                 <Text style={Styles.durationText}> {place.duration} Days</Text>
//                             </View>
                            
//                             <View style={Styles.budget}>
//                                         <Text style={[Styles.destinationText, { fontSize: 17 }]}>${place.budget }</Text>
//                             </View>
                          
//                         </View>
  
//                     </View>
                    
//                             </ImageBackground>
//                         </TouchableOpacity>
                        
  
//                      ) )}
  
  
                
//                     </ScrollView>
                
//             </View> 
            
//         </View>
        
//     );
//   };