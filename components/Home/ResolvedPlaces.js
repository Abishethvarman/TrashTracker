import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

const ResolvedPlaces = () => {

    const [rplaces,setRplaces] = useState()

    useEffect(() => {
        try {
            const getResolved =query((collection(db, 'resolves')),orderBy("createAt", "desc"))
            // collection(db, 'spots')
            
            onSnapshot(getResolved,(snapshots)=>{
                let spotARR = [];
                snapshots.docs.map((doc)=>{

                    spotARR.push({...doc.data(),id:doc.id})
                    // console.log(doc.id);
                

                })
              setRplaces(spotARR)
                

            })

             
        } catch (error) {

            let spotARR = [];
            setRplaces(spotARR)

        }


    }, [])

    return (
        <View style={Styles.container}>
            
            <View style={Styles.headerWrapper}>
                <TouchableOpacity navigation={navigation} 
            onPress={()=> navigation.navigate("TrashSpotScreen")}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Resolved </Text> 
                <Text style={Styles.header}> places</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {rplaces && rplaces.map((rplace) => (
            <View style={{marginLeft:20, marginBottom:10}} key={rplace.id}>
                <ImageBackground style={Styles.suggestImg} 
                    source={{uri:rplace.titleImage}}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>{rplace.place}</Text>
                            </View>

                        </View>
                </ImageBackground> 
                </View>
                
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
    }
})

export default ResolvedPlaces