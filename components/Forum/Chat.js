import { View, Text, ScrollView } from 'react-native'
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
                  
                  console.log(doc.caption)

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
    {chats && chats.map((chat) => (
   
   <View key={chat.id}>
     <Divider></Divider>
     <Text >{chat.caption}</Text>
     
   </View>

               
    ))}
     </View>
    
  )
}

export default Chat