import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent, Pressable } from 'react-native';
import React,{useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where, doc} from '@firebase/firestore'
import { db } from '../firebase'
import {useRoute} from '@react-navigation/native'
import moment from 'moment';
import Chat from '../components/Forum/Chat';
import DatePicker from 'react-native-date-picker';
import { Divider } from 'react-native-elements';
// import Moment from 'react-moment';

const TrashList = ({ navigation}) => {
    const [Tlist, setTlist] = useState()
    
   

    const route = useRoute();
    const {spot} = route.params;
    console.log(spot);

    
    // const getTrashSpot = () =>
    // {
    //     const ref = collection(db,'spots')
    //     // const q = query(ref,where("uid","==",spotid))

    //     onSnapshot(ref, (snapshot) =>
    //     {
    //         snapshot.docs.map((doc)=>{
    //             setTlist({...doc.data(),id:doc.id})
    //         })
    //         // setTlist((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} ))))
      
    //     })

        
    //     // console.log(place_name)
    // }

    // useEffect(() => {
    //     getTrashSpot();
    // },[])

    return (
        <View style={Styles.container}>
            <View style={{marginTop:20, flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={35} color="#4c4c4b" />
            </TouchableOpacity>
                {spot &&  <View style={Styles.headerWrapper}>
                <Text style={{fontSize:28, marginHorizontal:0, alignItems:'center',fontWeight:'bold', color:'white'}}>@{spot.place} </Text>
                
                </View>}
            </View>
            {spot &&  <View style={Styles.headerWrapper}>
                <Image source={{uri:spot.titleImage}} style={Styles.titleImage}/>
                
                <View style={{flexDirection:'row', marginHorizontal:5}}>
                <Text style={Styles.text1}>Spot tracked on : {moment(spot.createAt.toDate()).format('MMMM Do YYYY, h:mm a')}</Text>
                <Text style={Styles.text1}> </Text>
                <Ionicons name="time" size={18} color="black" style={{marginVertical:5}}/>
                <Text style={Styles.text1}> {moment(spot.createAt.toDate()).startOf('day').fromNow()}</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('MapDisplaySpot',{spot})} style={{marginHorizontal:5,flexDirection:'row',justifyContent:'center'}}>
                <Ionicons name="earth" size={15} color="white" />
                <Text style={Styles.mapText}>View on map</Text>
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                <Text style={Styles.seviority}>Seviority of the spot :  {spot.seviority}</Text>
                </View>
                <Divider/>
                <Text style={Styles.text2}>What can we see there with naked eye!</Text>
                <Text style={Styles.text3}>Food wrappers : {spot.Food_Wrappers}</Text>
                <Text style={Styles.text3}>Polythene bags : {spot.Polythene_bags}</Text>
                <Text style={Styles.text3}>PET bottles : {spot.PET_Bottles}</Text>
                <Text style={Styles.text3}>Plastic_Debris : {spot.Plastic_Debris}</Text>
                <Text style={Styles.text3}>Large Plastic Rigid : {spot.Large_Plastic_Rigid}</Text>
                <View style={{bottom:0, marginBottom:5}}>
                <View style={Styles.EnterButton}>
                <Pressable style={Styles.endButton} onPress={()=>navigation.navigate('AddCleanUp',{spot})}>
                    <Text style={Styles.text4}> I'm cleaning it on!</Text>
                </Pressable>
                </View>
                </View>
            </View>
        }
                
            <View >
  
                {/* <ScrollView>
                    {spot && Tlist.map((doc,index) => (
                        
                        <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('HomeScreen',
                                {
                                    uid: doc.uid,
                                    imgURL: doc.imgURL,
                                   
                            })
                                
                        }
                        }   >
  
                        <Image style={Styles.imga}           
                      source={{uri:doc.imgURL}}
                     />
                    
          
                    </TouchableOpacity>        
  
                     ) )}
  
                
                
                </ScrollView> */}
                
            </View> 
         </View>  
        
    );
  };
  const Styles=StyleSheet.create({
 container:{
      backgroundColor:'#05787c',
      flex:1   
     
 },
 headerWrapper:{
     
 },
 titleImage:{
     height:250, 
     width:'90%', 
     marginHorizontal:20,
     borderRadius:20,
     borderColor:'green',
     borderWidth: 2
    },
    EnterButton:{
        bottom:0
    },
    mapText:{
        fontSize:15,
        color:'white',
        // fontFamily:'roboto'
    },
    seviority:{
        borderWidth:1,
        padding:10,
        borderColor:"#05787c",
        marginHorizontal:20,
        fontSize:24,
        justifyContent:'center',
        color:'#05787c',
        backgroundColor:'silver',
        borderRadius:10
    },
    text1:{
        fontSize:15,
        fontWeight:'500',
        marginLeft:5,
        marginVertical:5,
        color:'white'
    },
    text2:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:24,
        color:'black',
        alignItems:'center'
    },
    text3:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        marginLeft:5
    },
    endButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        elevation: 5,
        margin:10,
        backgroundColor:'white',
        width:'95%',
        height:50
    },
    text4:{
        fontWeight:'bold',
        fontSize:24,
        color:'#05787c',
        alignItems:'center'
    }
  })
  export default TrashList;