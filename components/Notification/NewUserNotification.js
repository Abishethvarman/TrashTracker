import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useNavigation } from '@react-navigation/native'

const NewUserNotification = ({navigation}) => {

    const [users,setUsers] = useState()
    const [currentUser,setCurrentUser]=useState();
    useEffect(() => {
    
    current();
    // newUser();

    }, [])

    const newUser=()=>{
    try {
      const getNewUser =query((collection(db, 'users')), where("createAt",">=",currentUser.createAt) )
      // collection(db, 'spots')
      // where >= createAt
      
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

        }}

      const current=()=>{
    try {
      const getCurrentUser =query((doc(db, 'users','FS8yYVnQmESSYp5jRT5lRDgqFKI2')))
      // collection(db, 'spots')
      // where >= createAt
      // console.log(auth.currentUser.uid)
      onSnapshot(getCurrentUser,(snapshots)=>{
         
        setCurrentUser(snapshots.data())
          })

          

      } catch (error) {

     console.log(error)

  }}
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