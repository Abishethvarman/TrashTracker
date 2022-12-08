import { View, Text, StatusBar,StyleSheet, TouchableOpacity,Image,ScrollView, Button, MaskedViewComponent, Pressable } from 'react-native';
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
            <Header navigation={navigation}/>
             
            {rplace &&  <View style={Styles.headerWrapper}>
                
                <Text style={{color:'white', fontSize:25, textAlign:'center'}}>@{rplace.place}</Text>
                <Image source={{uri:rplace.titleImage}} style={Styles.titleImage1}/>
                <Image source={{uri:rplace.resolveImage}} style={Styles.titleImage1}/>
                  
                {/* <Text >{rplace.usermail}</Text>
                <Text>{rplace.seviority}</Text> */}
                {/* <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text> */}
                 <View>
                <Pressable style={Styles.endButton} onPress={()=>navigation.navigate('HomeScreen')}>
                <Text style={Styles.buttonText}>Keep Our Country Clean </Text>
                </Pressable> 
                    </View>
            </View>
        }
                
            <View >
  
                
            </View> 
         </View>  
        
    );
  };

  const Header = ({navigation: { goBack }})=>(
    <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={()=> goBack()}>
          <Ionicons style={{paddingTop:10,}} name="chevron-back-outline" size={35} color="white" />
          </TouchableOpacity>
          <Text></Text>
          <Text style={Styles.headerText}>We made awesome this</Text>
          <Text> </Text>
        </View>
  )


  const Styles=StyleSheet.create({
 container:{
         
     backgroundColor:"#05787c",
     flex:1
 },
 headerContainer:{
    alignItems:'center',
    marginTop:20, 
    flexDirection:'row',
  },
  headerText:{
    color:'white',
 alignItems:'center',
 fontWeight:'bold',
 fontSize:30,
 marginTop:9,
 marginHorizontal:5,
 marginVertical:5
  },
  titleImage1:{
    height:225, 
    width:'90%', 
    marginHorizontal:20,
    borderRadius:20,
    borderColor:'white',
    borderWidth: 2,
    marginBottom: 5
   },
   endButton:{
    alignItems:"center",
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 50,
    elevation: 5,
    margin:10,
    backgroundColor:'#cdecef',
    width:'95%',
    height:50,
    // position: 'absolute', 
    marginTop:15
  },
  buttonText:{
    fontSize:25,
    fontWeight:'bold',
    color:'#112A46'
  }
  })
  export default ResolveList;