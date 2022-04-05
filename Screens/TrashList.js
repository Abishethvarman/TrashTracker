import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent } from 'react-native';
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
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
                {spot &&  <View style={Styles.headerWrapper}>
                <Text style={{fontSize:30, marginHorizontal:5}}>@ {spot.place} </Text>
                
                </View>}
            </View>
            {spot &&  <View style={Styles.headerWrapper}>
                <Image source={{uri:spot.titleImage}} style={Styles.titleImage}/>
                <View style={{flexDirection:'row'}}>
                <Text style={Styles.text1}>Spot tracked on : {moment(spot.createAt.toDate()).format('MMMM Do YYYY, h:mm a')}</Text>
                <Text style={Styles.text1}> </Text>
                <Ionicons name="time" size={18} color="black" />
                <Text style={Styles.text1}> {moment(spot.createAt.toDate()).startOf('day').fromNow()}</Text>
                </View>
                <View style={{justifyContent:'center'}}>
                <Text style={Styles.seviority}>Seviority of the spot :  {spot.seviority}</Text>
                </View>
                <Divider/>
                <Text>Food wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene bags {spot.Polythene_bags}</Text>
                <Text>PET bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text>
                <View style={{bottom:0, marginBottom:5}}>
                <Divider style={{margin:5, size:5, color:'black'}}/>
                <View style={Styles.EnterButton}>
                <Button title='Im cleaning it on ' color='blue' onPress={()=>navigation.navigate('AddCleanUp',{spot})}/>
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
      backgroundColor:'#20b2aa',
      flex:1   
     
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
    text1:{
        fontSize:15,
        fontWeight:'500',
        marginLeft:5
    },
    seviority:{
        borderWidth:1,
        padding:10,
       
        borderColor:"red",
        marginHorizontal:20,
        fontSize:24,
        justifyContent:'center',
        color:'red',
        backgroundColor:'silver',
        borderRadius:10
    }
  })
  export default TrashList;