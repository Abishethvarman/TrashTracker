import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, onSnapshot,query ,where} from '@firebase/firestore'
import { db } from '../firebase'
import {useRoute} from '@react-navigation/native'

const TrashList = ({ navigation}) => {
    const [Tlist, setTlist] = useState()
    

    const route = useRoute();
    const {uid} = route.params;
    // console.log(uid);

    
    const getTrashSpot = () =>
    {
        const ref = collection(db, 'spots')
        const q = query(ref,where("uid","==",uid))

        onSnapshot(q, (snapshot) =>
        {
            snapshot.docs.map((doc)=>{
                setTlist({...doc.data(),id:doc.id})
            })
            // setTlist((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} ))))
      
        })

        
        // console.log(place_name)
    }

    useEffect(() => {
        getTrashSpot();
    },[])

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
            </TouchableOpacity>
  
            {Tlist && <View style={Styles.headerWrapper}>
                <Text >{Tlist.place} thani detail screen</Text>
                <Image source={{uri:Tlist.titleImage}} style={{height:100, width:100}}/>
                <Text>Date added {Tlist.CreateAt}</Text>
                <Text >{Tlist.usermail}</Text>
                <Text>{Tlist.seviority}</Text>
                <Text>Food_Wrappers {Tlist.Food_Wrappers}</Text>
                <Text>Polythene_bags {Tlist.Polythene_bags}</Text>
                <Text>PET_Bottles {Tlist.PET_Bottles}</Text>
                <Text>Plastic_Debris {Tlist.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {Tlist.Large_Plastic_Rigid}</Text>
                <View style={{bottom:0, marginBottom:5}}>
                <Button title='Im cleaning it on ' color='blue'/>
                </View>
            </View>}
                
            <View >
  
                {/* <ScrollView>
                    {Tlist && Tlist.map((doc,index) => (
                        
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