import React, { useEffect, useState,  } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView , TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { auth, db } from '../../firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import TrashDisplay from '../TrashSpots/TrashDisplay';


const TrashSpot = ({navigation}) => {
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


// const [spot,setSpot] = useState([])

//     const  = () =>
//     {
//         const spot = collection(db, 'spots')
//         onSnapshot(spot, (snapshot) =>
//         {
//             setSpot((snapshot.docs.map((spots) => ({ id: spots.id, ...spots.data() }))))
//             console.log(doc.data());
      
//         })
       
    
//     useEffect(() => {
//         getTrashSpot();
//     },[])
//     }

    
    return (
        <View style={Styles.container}>
            
            <TouchableOpacity navigation={navigation} onPress={()=> navigation.navigate("TrashSpotScreen")}>
                <View style={Styles.headerWrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Trash</Text> 
                <Text style={Styles.header}> hot spot</Text>
            </View>
            </TouchableOpacity>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {spot && spot.map((spots) => (
            <TouchableOpacity 
            key={spots.id}
            onPress={() => {navigation.navigate('TrashList', {
                    uid: spots.uid,
                     })   
              }}>
            <View  style={{marginLeft:20, marginBottom:10}}>
                <ImageBackground style={Styles.suggestImg} 
                    source={{uri:spots.titleImage}}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={{flexDirection:'row-reverse'}}>
                        <View style={Styles.seviorityDetail}>
                            <Text style={Styles.sevierText}>{spots.seviority}</Text>
                        </View>
                        </View>
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>{spots.place}</Text>
                            </View>

                        </View>
                </ImageBackground> 
                </View>
                </TouchableOpacity>
            ))}
             
                </ScrollView>
            
        </View>
    )

            }
const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // paddingHorizontal:20
      
    },
    headerWrapper: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft:20
    },
    header: {
        fontSize: 20,
        color:"#4c4c4b"
    },
    suggestImg: {
        width: 160,
        height: 200,
        marginRight:10
        
    },
    suggestTextWrapper: {
        flex:1,
        justifyContent: "space-between",
        marginHorizontal:0
    },
    suggestBottom: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        width: 160,
        
    },
    suggestText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        paddingVertical:10,
        paddingHorizontal: 10,
        
    },
    suggestplace: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 7,
       
    },
    suggestplaceText: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
        paddingBottom:10
    },
    seviorityDetail:{
        
        margin:10,
        backgroundColor:'red',
        width:'30%',
        borderRadius:10,
        alignItems:'center'
        
        
    },
    sevierText:{
        color:'yellow',
        fontSize:10,
        paddingVertical:1
    }
})

export default TrashSpot