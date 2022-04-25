import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Alert, Platform, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

 

const AddCleanUp = () => {

//   useEffect(() => {
    


// }, [])

  const route = useRoute();
  const {spot} = route.params;
  console.log(spot);
  console.log(spot.place)
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [mode,setMode] =useState('date')
  const [shown,setShown] =useState(false)
  const [text,setText] = useState('empty')
  const [open, setOpen] = useState(false)

  const onChange =(event,selectDate) => {
    const currentDate = selectDate || date;
    setShown(Platform.OS==='ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
    let fTime =  tempDate.getHours()+ ' : ' +tempDate.getMinutes();
    setText("on coming "+fDate+' at '+fTime)
  }

  const showMode =(currentMode)=>{
    setShown(true);
    setMode(currentMode);
  }
  // const showDatepicker = () => {
  //   showMode('date');
  // };

  const AddSubmit = async () => {
   console.log('19 vathu add ')
    await setDoc(doc(db,'events',spot.id), {
        name:'',
        caption: spot.caption,
        place: spot.place,
        seviority: spot.seviority,
        // Polythene_bags: spot.counter,
        // PET_Bottles: spot.counter1,
        // Plastic_Debris: spot.counter2,
        // Food_Wrappers: spot.counter3,
        // Large_Plastic_Rigid: spot.counter4,
        createAt: new Date(),
        titleImage: spot.titleImage,
        // userid: auth.currentUser.uid,
        // //username: users.username,
        // usermail: auth.currentUser.email,
        latitude: spot.latitude,
        longitude:spot.longitude
        // username:auth.currentUser.username
        
         
        

    }).then(() => {
        Alert.alert('Successfully Added');
        
        console.log(spot.caption)
    })
    
    // .catch(()=>error)
    // console.log(error)

}
console.log(spot.caption);   

const DeleteSpot =()=>{
  console.log('naan delete panna poram');
  const docRef = doc(db,'spots',spot.id)
  deleteDoc(docRef)
  .then(()=>{
    navigation.push('HomeScreen');
  })
}

  
  return (
    
    <View>
      <Header navigation={navigation}/>
      
      
      {spot &&  <View style={styles.headerWrapper}>
                <Text style={styles.PlaceText}>{spot.place}</Text>
                <Image source={{uri:spot.titleImage}} style={styles.titleImage}/>
                <View style={{flexDirection:'row', marginHorizontal:5}}>
                <Text style={styles.text1}>Spot tracked on : {moment(spot.createAt.toDate()).format('MMMM Do YYYY, h:mm a')}</Text>
                <Text style={styles.text1}> </Text>
                <Ionicons name="time" size={18} color="black" style={{marginVertical:5}}/>
                <Text style={styles.text1}>{moment(spot.createAt.toDate()).startOf('time').fromNow()}</Text>
                </View>
                <Text >{spot.usermail}</Text>
                <Text style={styles.seviority}>Seviority of the spot : {spot.seviority}</Text>
                <Text>Food_Wrappers {spot.Food_Wrappers}</Text>
                <Text>Polythene_bags {spot.Polythene_bags}</Text>
                <Text>PET_Bottles {spot.PET_Bottles}</Text>
                <Text>Plastic_Debris {spot.Plastic_Debris}</Text>
                <Text>Large_Plastic_Rigid {spot.Large_Plastic_Rigid}</Text>
                <View style={{bottom:0, marginBottom:5}}>
                {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
                {/* <DatePicker modal open={open} date={date} 
                onConfirm={(date) => { setOpen(false), setDate(date)}}
                onCancel={() => { setOpen(false)}}
                /> */}
                
                </View>
            </View>
    }
    
    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>      
                <Button color='gray' title='Select the date' onPress={()=>showMode('date')}/>
                <Button color='grey' title='Pick your time' onPress={()=>showMode('time')}/>
                
                {shown && (
                <DateTimePicker testID='dateTimePicker' value={date} mode={mode} is24Hour={false} display="default" onChange={onChange}
                />)}
                </View>
                <Pressable style={styles.endButton} onPress={()=>{
                  AddSubmit();
                  DeleteSpot();
                }}>
                <Text>Im cleaning it {text}</Text>
                </Pressable>
         <Button title= 'Im cleaning it ' style={{color:'green'}} onPress={()=>{
                  AddSubmit();
                  DeleteSpot();
                }}/>
    </View>
    
  )
}

const Header = ({navigation: { goBack }})=>(
  
  <View style={{marginTop:20, flexDirection:'row',}}>
          <TouchableOpacity onPress={()=> goBack()}>
          <Ionicons style={{paddingTop:10,}} name="chevron-back-outline" size={35} color="blue" />
          </TouchableOpacity>
          <Text></Text>
          <Text style={styles.headerText}>I'm cleaning on </Text>
          <Text> </Text>
      </View> 
  
)

const styles=StyleSheet.create({
  headerText:{
    color:'red',
    marginHorizontal:0,
     alignItems:'center',
     fontWeight:'bold',
     fontSize:30,
     marginTop:9,
     marginHorizontal:5

  },
  PlaceText:{
    fontSize:30,
    marginVertical:2
  },
  headerWrapper:{
    alignItems:'center',
  },
  titleImage:{
    height:250, 
    width:'90%', 
    marginHorizontal:20,
    borderRadius:20,
    borderColor:'green',
    borderWidth: 2
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
    borderRadius:10
},
text1:{
  fontSize:15,
  fontWeight:'500',
  marginLeft:5,
  marginVertical:5
},
text2:{
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:24,
    color:'blue',
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
  backgroundColor:'#0288D1',
  width:'95%',
  height:50
},

})
export default AddCleanUp

