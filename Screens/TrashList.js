import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where} from '@firebase/firestore'
import { db } from '../firebase'
import {useRoute} from '@react-navigation/native'

const TrashList = ({ navigation}) => {
    const [Tlist, setTlist] = useState([])
    

    const route = useRoute();
    const { uid} = route.params;

    const getTrashSpot = () =>
    {
        const ref = collection(db, 'spots')
        const q = query(ref,where("uid","==",uid))

        onSnapshot(q, (snapshot) =>
        {
            setTlist((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} ))))
      
        })

        
        // console.log(place_name)
    }

    useEffect(() => {
        getTrashSpot();
    })

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
  
            <View style={Styles.headerWrapper}>
                <Text style={[Styles.heading, { fontWeight: "bold" }]}>{Tlist.place}</Text> 
                <Text style={Styles.heading}>{ Tlist.usermail}</Text>
            </View>
  
            <View style={Styles.destination}>
  
                <ScrollView >
                    {Tlist.map((doc,index) => (
                        
                        <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('TripDisplay',
                                {
                                    uid: spots.uid,
                                    imgURL: spots.imgURL,
                                   
                            })
                                
                        }
                        }   >
  
                        <Image    style={Styles.imga}           
                      source={{uri:doc.imgURL}}
                     />
                    
                    <View style={Styles.suggestTextWrapper}>
                    
                        <View style={Styles.catogary}>
                                    <Text style={Styles.destinationText}>{doc.category }</Text>
                        </View>
  
                        <View style={[Styles.suggestplace]}>
                            <Text style={Styles.suggestplaceText}>{ doc.d_name}</Text>
                        </View>
                        
                        <View style={Styles.catogaryWrapper}>
  
                            <View >
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={Styles.durationText}> {doc.duration} Days</Text>
                            </View>
                            
                            <View style={Styles.budget}>
                                        <Text style={[Styles.destinationText, { fontSize: 17 }]}>${doc.budget }</Text>
                            </View>
                          
                        </View>
  
                    </View>
                    
                            
                        </TouchableOpacity>
                        
  
                     ) )}
  
  
                
                    </ScrollView>
                
            </View> 
            
        </View>
        
    );
  };
  const Styles=StyleSheet.create({
 container:{
    backgroundColor:"yellow"
 }
  })
  export default TrashList;