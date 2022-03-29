import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
 

const AddCleanUp = () => {
  const route = useRoute();
  const {spot} = route.params;
  console.log(spot);
  console.log(spot.place)
  const navigation = useNavigation();

  const AddSubmit = async () => {
   
    await addDoc(collection(db,'cleanup'), {
        caption: spot.caption,
        place: spot.placespot,
        // seviority,
        // Polythene_bags: counter,
        // PET_Bottles: counter1,
        // Plastic_Debris: counter2,
        // Food_Wrappers: counter3,
        // Large_Plastic_Rigid: counter4,
        // createAt: new Date(),
        // titleImage: ImgUrl,
        // userid: auth.currentUser.uid,
        // //username: users.username,
        // usermail: auth.currentUser.email,
        // latitude: latitude,
        // longitude:longitude
        // // username:auth.currentUser.username
        
       
        

    }).then(() => {
        Alert.alert('Successfully Added');
        navigation.push('HomeScreen');
    })

}

  
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>AddCleanUp</Text>
      {spot &&  <View style={styles.headerWrapper}>
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
                <Button title='Im cleaning it on ' color='green' onPress={()=>{
                  AddSubmit();
                  // DeleteSpot();
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
          <Text style={styles.headerText}>Insights Time</Text>
          <Text> </Text>
      </View>
)

const styles=StyleSheet.create({
  headerText:{
    color:'red'
  }
})
export default AddCleanUp

