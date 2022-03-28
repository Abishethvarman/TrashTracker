import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where, doc} from '@firebase/firestore'
import { db } from '../firebase'
import {useRoute} from '@react-navigation/native'
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
             
            {spot &&  <View style={Styles.headerWrapper}>
                <Text>{spot.place} thani detail screen</Text>
                <Image source={{uri:spot.titleImage}} style={{height:100, width:100}}/>
                  
                <Text >{spot.usermail}</Text>
                <Text>{spot.seviority}</Text>
                <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text>
                <View style={{bottom:0, marginBottom:5}}>
                <Button title='Im cleaning it on ' color='blue'/>
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
         
     
 }
  })
  export default TrashList;