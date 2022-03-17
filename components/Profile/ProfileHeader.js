import React  from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View,StyleSheet,TouchableOpacity, Text} from 'react-native'

const ProfileHeader = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.push("HomeScreen")}>
            <Ionicons name="chevron-back-outline" size={45} color="purple" />
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
        marginTop:30
    
    },
    headerText:{
        color:'black',
        fontWeight:'700',
        marginRight:20,
        fontSize:30
    
    },
})

  export default ProfileHeader;