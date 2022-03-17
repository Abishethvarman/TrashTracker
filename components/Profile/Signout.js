import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'

const Signout = () => {
  return (
    <Pressable  style={styles.signoutButton}>
        <Text style={styles.buttonText}>Sign Out</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    signoutButton:{
  
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        elevation: 10,
        margin:10,
        backgroundColor:'pink',
        width:'95%',
        height:75
      },
      buttonText: {
        fontSize: 25,
        lineHeight: 28,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'green',
      },
})

export default Signout;



