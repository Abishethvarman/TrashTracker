import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { Divider } from 'react-native-elements'

const Chat = () => {
  const [chats,setChats] = useState()

    useEffect(() => {
        try {
            const getChat =query((collection(db, 'chats')),orderBy("createAt", "desc"))
            // collection(db, 'spots')
            
            onSnapshot(getChat,(snapshots)=>{
                let ChatDisplay = [];
                snapshots.docs.map((doc)=>{

                  ChatDisplay.push({...doc.data(),id:doc.id})
                    // console.log(doc.id);
                  
                  // console.log(doc.caption)

                })
              setChats(ChatDisplay)
                

            })

             
        } catch (error) {

            let ChatDisplay = [];
            setChats(ChatDisplay)

        }


    }, [])

  return (
    <View>
      <ScrollView>
    {chats && chats.map((chat) => (
   
   <View key={chat.id} style={styles.singleChat}>
     <Divider></Divider>
     <Text >{chat.caption}</Text>
     
   </View>

               
    ))}
    </ScrollView>
     </View>
    
  )
}

const styles=StyleSheet.create({
  singleChat:{
    margin:5,
    padding:5,
    alignItems:'baseline',
    borderColor:'white',
    borderWidth:5
  }
})

export default Chat