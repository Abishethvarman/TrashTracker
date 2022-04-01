import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection, deleteDoc, doc, setDoc,  } from 'firebase/firestore';
import { db } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup'
     
    
    const AddResolveScreen = () => {
      const route = useRoute();
      const {event} = route.params;
      console.log(event);
      console.log(event.place)
      const navigation = useNavigation();
    
      const AddSubmit = async () => {
       console.log('21 vathu add ')
        await setDoc(doc(db,'resolves',event.id), {
            name:'',
            caption: event.caption,
            place: event.place,
            seviority: event.seviority,
            // Polythene_bags: spot.counter,
            // PET_Bottles: spot.counter1,
            // Plastic_Debris: spot.counter2,
            // Food_Wrappers: spot.counter3,
            // Large_Plastic_Rigid: spot.counter4,
            createAt: new Date(),
            titleImage: event.titleImage,
            // userid: auth.currentUser.uid,
            // //username: users.username,
            // usermail: auth.currentUser.email,
            latitude: event.latitude,
            longitude:event.longitude
            // username:auth.currentUser.username
            
             
            
    
        }).then(() => {
            Alert.alert('Successfully Added');
        
            console.log(event.caption)
        })
        
        // .catch(()=>error)
        // console.log(error)
    
    }

    const DeleteEvent =()=>{
        console.log('naan delete panna poram');
        const docRef = doc(db,'events',event.id)
        deleteDoc(docRef)
        .then(()=>{
          navigation.push('HomeScreen');
        })
      }
      
    console.log(event.caption);   
    
    
    
      
      return (
        
        <View>
          <Header navigation={navigation}/>
          <Text>AddCleanUp</Text>
          
          {event &&  <View style={styles.headerWrapper}>
                    <Text>{event.place} thani detail screen</Text>
                    <Image source={{uri:event.titleImage}} style={{height:100, width:100}}/>
                      
                    <Text >{event.usermail}</Text>
                    <Text>{event.seviority}</Text>
                    {/* <Text>Food_Wrappers {event.Food_Wrappers}</Text>
                    <Text>Polythene_bags {event.Polythene_bags}</Text>
                    <Text>PET_Bottles {spot.PET_Bottles}</Text>
                    <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                    <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text> */}
                    <View style={{bottom:0, marginBottom:5}}>
                    <Button title='Im cleaning it on ' color='green' onPress={()=>{
                      AddSubmit();
                      DeleteEvent();
                    }}/>
                    </View>
                </View>
        }
        
        </View>
        
      )
    }
    
    const Header = ({navigation: { goBack }})=>(
      <View style={styles.headerContainer}>
              <TouchableOpacity onPress={()=> goBack()}>
                <Text></Text>
              <Ionicons name="chevron-back-outline" size={30} color="blue" />
              </TouchableOpacity>
              <Text style={styles.headerText}>I cleaned</Text>
              <Text> </Text>
          </View>
    )
    
    const styles=StyleSheet.create({
      headerText:{
        color:'red'
      }
    })

    

export default AddResolveScreen