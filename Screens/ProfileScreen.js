import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, StyleSheet,TouchableOpacity, Image, Button, Pressable} from 'react-native';

import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileDetails from '../components/Profile/ProfileDetails';
import Signout from '../components/Profile/ProfileSignout';


const ProfileScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
    <ProfileHeader navigation={navigation}/>
    <ProfileDetails navigation={navigation}/>
    <Signout/>
    </View>
  )
}
 const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'yellow'
  }
 })

  export default ProfileScreen;