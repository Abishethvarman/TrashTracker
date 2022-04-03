import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { Divider } from 'react-native-elements'
import moment from 'moment'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
     
     <Text style={styles.chatText} >{chat.caption}</Text>

     <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:20, marginBottom:0}}>
     <View style={{flexDirection:'row'}}>
     <AntDesign name="clockcircleo" size={15} color="#191970" />
     <Text style={{color:"#f5fffa"}}> {moment(chat.createAt.toDate()).format('MMMM Do YYYY, h:mm a')}</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <MaterialCommunityIcons name="timer-sand" size={15} color="#191970" />
    <Text style={{color:"#f5fffa"}}> {moment(chat.createAt.toDate()).startOf('day').fromNow()}</Text>
    </View>
    </View>
   </View>

               
    ))}
    </ScrollView>
     </View>
    
  )
}

const styles=StyleSheet.create({
  singleChat:{
    margin:2,
    padding:10,
    alignItems:'flex-start',
    borderColor:'#dcdcdc',
    borderWidth:2,
    borderBottomWidth:5
  },
  chatText:{
    color:"white",
    fontSize:22,
    shadowColor:'grey'
  }
})

export default Chat