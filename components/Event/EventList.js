import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where, doc} from '@firebase/firestore'
import { db } from '../../firebase'
import {useRoute} from '@react-navigation/native'
// import Moment from 'react-moment';
import moment from 'moment';

const EventList = ({ navigation}) => {
    const [Elist, setElist] = useState()
   

    const route = useRoute();
    const {event} = route.params;
    console.log(event);

    
    return (
        
        <View style={Styles.container}>
            <Header navigation={navigation}/>
             
            {event &&  <View style={Styles.headerWrapper}>
                <Text style={Styles.Text1}>on {event.place} @ {moment(event.CleanUpdate.toDate()).format('MMMM Do YYYY, h:mm a')}</Text>
                <Text></Text>
                <Image source={{uri:event.titleImage}} style={Styles.titleImage}/>
                <TouchableOpacity onPress={()=>navigation.navigate('MapDisplayEvent',{event})} style={{marginHorizontal:5,flexDirection:'row',justifyContent:'center'}}>
                <Ionicons name="earth" size={15} color="#C5C8CB" />
                <Text style={Styles.mapText}>View on map</Text>
                </TouchableOpacity>
                <Text style={Styles.seviority}>Seviority of the spot : {event.seviority}</Text>
                <Text>Message of the spot uploader: {event.caption}</Text>
                
                {/* <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text> */}
                <View style={{bottom:0, marginBottom:5, position:'relative'}}>
                <Button title='Im cleaning it on ' color='blue' onPress={()=>navigation.navigate('AddResolve',{event})}/>
                </View>
            </View>
        }
                
            <View >
  
                
            </View> 
         </View>  
        
    );
  };
  const Header = ({navigation: { goBack }})=>(
  
    <View style={{marginTop:20, flexDirection:'row',}}>
            <TouchableOpacity onPress={()=> goBack()}>
            <Ionicons style={{paddingTop:10,}} name="chevron-back-outline" size={35} color="blue" />
            </TouchableOpacity>
            <Text></Text>
            <Text style={Styles.headerText}>Cleaning happening on</Text>
            <Text> </Text>
        </View> 
    
  )

  const Styles=StyleSheet.create({
 container:{
         
     
     flex:1
 },
 headerWrapper:{
    alignItems:'center',
  },
 headerText:{
    color:'red',
    marginHorizontal:0,
     alignItems:'center',
     fontWeight:'bold',
     fontSize:30,
     marginTop:9,
     marginHorizontal:5

  },
  titleImage:{
    height:250, 
    width:'90%', 
    marginHorizontal:20,
    borderRadius:20,
    borderColor:'green',
    borderWidth: 2
   },
   Text1:{
       fontSize:20,
       fontWeight:'bold'
   },
   seviority:{
    borderWidth:1,
    padding:8,
    borderColor:"red",
    marginHorizontal:20,
    fontSize:20,
    justifyContent:'center',
    color:'red',
    backgroundColor:'silver',
    borderRadius:10,
    width:'85%'
},
mapText:{
    fontSize:15,
    color:'green',
    // fontFamily:'roboto'
},
  })
  export default EventList;