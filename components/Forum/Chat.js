import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'

const Chat = () => {
  const [chat,setChat] = useState()

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
              setChat(ChatDisplay)
                

            })

             
        } catch (error) {

            let ChatDisplay = [];
            setChat(ChatDisplay)

        }


    }, [])

  return (
    <View>
    {chat && chat.map((chats) => (
   
   <View key={chats.id}>
     <Text>{chats.caption}</Text>
     
   </View>

               
    ))}
     </View>
    
  )
}

export default Chat