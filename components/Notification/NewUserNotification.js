import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'

const NewUserNotification = () => {

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
              getNewUser(spotARR)
                

            })

             
        } catch (error) {

            let spotARR = [];
            setUsers(spotARR)

        }


    }, [])

  return (
    <View>
        {users && users.map((user) => (
      <Text>Hey!!! a new member to our family. Tracker {user.username} has joined the TT community.</Text>
        ))}
    </View>
  )
}

export default NewUserNotification