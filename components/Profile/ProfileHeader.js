import React  from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View,StyleSheet,TouchableOpacity, Text} from 'react-native'

const ProfileHeader = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.push("HomeScreen")}>
            <Ionicons name="chevron-back-outline" size={45} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>I'm at TrashTracker</Text>
            <Text> </Text>
        </View>
  )

const styles= StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:25
    
    },
    headerText:{
        color:'white',
        fontWeight:'700',
        marginRight:20,
        fontSize:30
    
    },
})

  export default ProfileHeader;