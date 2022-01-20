import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ForumScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
    </SafeAreaView>
  );
};

const Header = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Let's Discuss</Text>
            <Text> </Text>
        </View>
)


const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30

    },
    headerText:{
        color:'white',
        fontWeight:'700',
        marginRight:20,
        fontSize:20

    } 
})
export default ForumScreen;
