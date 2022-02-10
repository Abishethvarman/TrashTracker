import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import FormikSpotUploader from './FormikSpotUploader';
import SpotImage from './SpotImage'



const AddNewSpot = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <FormikSpotUploader />
            
            
        
        </SafeAreaView>
        
    )
}
//
const Header = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={30} color="green" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Spot this trash</Text>
            <Text></Text>
        </View>
)

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
        flexDirection:'column',
        marginTop:5
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:25


    },
    headerText:{
        color:'green',
        fontWeight:'700',
        marginRight:20,
        fontSize:30

    }
})
export default AddNewSpot
