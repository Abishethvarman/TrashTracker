import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { useNavigation } from '@react-navigation/native'

const NewUserNotification = ({navigation}) => {

    const [users,setUsers] = useState()

    useEffect(() => {
        try {
            const getNewUser =query((collection(db, 'users')),orderBy("createAt", "desc"))
            // collection(db, 'spots')
            
            onSnapshot(getNewUser,(snapshots)=>{
                let spotARR = [];
                snapshots.docs.map((doc)=>{

                    spotARR.push({...doc.data(),id:doc.id})
                    // console.log(doc.id);
                

                })
              setUsers(spotARR)
                

            })

             
        } catch (error) {

            let spotARR = [];
            setUsers(spotARR)

        }


    }, [])

  return (
    <View style={styles.container}>
        {users && users.map((user) => (
      <Text key={user.id} style={{color:'blue'}}>Hey!!! a new member to our family. Tracker {user.username} has joined the TT community.</Text>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"red",
    flex:1
  }
})
export default NewUserNotification