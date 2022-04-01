import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where, doc} from '@firebase/firestore'
import { db } from '../../firebase'
import {useRoute} from '@react-navigation/native'
// import Moment from 'react-moment';

const EventList = ({ navigation}) => {
    const [Elist, setElist] = useState()
   

    const route = useRoute();
    const {event} = route.params;
    console.log(event);

    
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
             
            {event &&  <View style={Styles.headerWrapper}>
                <Text>{event.place} events thani screen</Text>
                <Image source={{uri:event.titleImage}} style={{height:100, width:100}}/>
                  
                <Text >{event.usermail}</Text>
                <Text>{event.seviority}</Text>
                {/* <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text> */}
                <View style={{bottom:0, marginBottom:5}}>
                <Button title='Im cleaning it on ' color='blue' onPress={()=>navigation.navigate('AddResolve',{event})}/>
                </View>
            </View>
        }
                
            <View >
  
                
            </View> 
         </View>  
        
    );
  };
  const Styles=StyleSheet.create({
 container:{
         
     
 }
  })
  export default EventList;