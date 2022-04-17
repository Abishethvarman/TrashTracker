import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where, doc} from '@firebase/firestore'
import { db } from '../../firebase'
import {useRoute} from '@react-navigation/native'
// import Moment from 'react-moment';

const ResolveList = ({ navigation}) => {
    const [rlist, setrlist] = useState()
   

    const route = useRoute();
    const {rplace} = route.params;
    console.log(rplace);

    
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
             
            {rplace &&  <View style={Styles.headerWrapper}>
                <Text>{rplace.place} rplaces thani screen</Text>
                <Image source={{uri:rplace.titleImage}} style={{height:100, width:100}}/>
                  
                <Text >{rplace.usermail}</Text>
                <Text>{rplace.seviority}</Text>
                {/* <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text> */}
                <View style={{bottom:0, marginBottom:5}}>
                <Button title='Im cleaning it on ' color='blue' onPress={()=>navigation.navigate('AddResolve',{rplace})}/>
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
         
     backgroundColor:"blue",
     flex:1
 }
  })
  export default ResolveList;