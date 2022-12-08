import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection, deleteDoc, doc, setDoc,  } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup'
import * as ImagePicker from 'expo-image-picker'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
     
    
    const AddResolveScreen = () => {
      const route = useRoute();
      const {event} = route.params;
      console.log(event);
      console.log(event.place)
      const navigation = useNavigation();
      const uploadImage = 'https://icon-library.com/images/upload-photo-icon/upload-photo-icon-16.jpg'
      const [image, setImage] = useState(uploadImage);


      useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    

    
    //const pickImage = async () => {
      const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        // No permissions request is necessary for launching the image library
        //let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 4],
        //     quality: 1,
        // });



        if (!result.cancelled) {
            setImage(result.uri);
            console.log(result.uri);
        }
    };


      const AddSubmit = async () => {
        let ImgUrl;

        if (image) {
            const response1 = await fetch(image);
            const blob1 = await response1.blob();
            const imgRef = ref(storage, `images/spots/${new Date().getTime()}`);
            const snap = await uploadBytes(imgRef, blob1);
            const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
            ImgUrl = downloadUrl;
        }
       console.log('21 vathu add ')
        await setDoc(doc(db,'resolves',event.id), {
            name:'',
            caption: event.caption,
            place: event.place,
            seviority: event.seviority,
            // Polythene_bags: spot.counter,
            // PET_Bottles: spot.counter1,
            // Plastic_Debris: spot.counter2,
            // Food_Wrappers: spot.counter3,
            // Large_Plastic_Rigid: spot.counter4,
            createAt: new Date(),
            titleImage: event.titleImage,
            // userid: auth.currentUser.uid,
            // //username: users.username,
            // usermail: auth.currentUser.email,
            latitude: event.latitude,
            longitude:event.longitude,
            // username:auth.currentUser.username
            resolveImage: ImgUrl
            
             
            
    
        }).then(() => {
            Alert.alert('Successfully Added');
        
            console.log(event.caption)
        })
        
        // .catch(()=>error)
        // console.log(error)
    
    }

    const DeleteEvent =()=>{
        console.log('naan delete panna poram');
        const docRef = doc(db,'events',event.id)
        deleteDoc(docRef)
        .then(()=>{
          navigation.push('HomeScreen');
        })
      }
      
    console.log(event.caption);   
    
    
    
      
      return (
        
        <View style={{backgroundColor:'#05787c', flex:1}}>
          <Header navigation={navigation}/>
          
          {event &&  <View style={styles.headerWrapper}>
                    <Text style={styles.subheading}>I feel that I have done a wonderful job and worth my earth @{event.place}</Text>
                    <Image source={{uri:event.titleImage}} style={styles.titleImage1}/>
                    <TouchableOpacity onPress={openCamera} style={styles.titleImage2} >
                    <Image source={{ uri: image }} style={{ height: '100%', width: '100%', borderRadius: 20 }}></Image>
                    </TouchableOpacity>
                    {/* <Text >{event.usermail}</Text>
                    <Text>{event.seviority}</Text> */}
                    {/* <Text>Food_Wrappers {event.Food_Wrappers}</Text>
                    <Text>Polythene_bags {event.Polythene_bags}</Text>
                    <Text>PET_Bottles {event.PET_Bottles}</Text>
                    <Text>Plastic_Debris {event.Plastic_Debris}</Text>
                    <Text>Large_Plastic_Rigid {event.Large_Plastic_Rigid}</Text> */}
                  
                </View>
        }

                    <View >
                    <Pressable style={styles.endButton} onPress={()=>{
                      AddSubmit();
                      DeleteEvent();
                    }}>
                <Text style={styles.buttonText}>I have done it. </Text>
                </Pressable> 
                    </View>
        </View>
        
      )
    }
    
    const Header = ({navigation: { goBack }})=>(
      <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> goBack()}>
            <Ionicons style={{paddingTop:10,}} name="chevron-back-outline" size={35} color="white" />
            </TouchableOpacity>
            <Text></Text>
            <Text style={styles.headerText}>Success Success !! </Text>
            <Text> </Text>
          </View>
    )
    
    const styles=StyleSheet.create({
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
      subheading:{
        fontSize:20,
       fontWeight:'bold',
      color:'black'},
      
       titleImage1:{
        height:225, 
        width:'90%', 
        marginHorizontal:20,
        borderRadius:20,
        borderColor:'green',
        borderWidth: 2,
        marginBottom: 5
       },
       titleImage2:{
        height:225, 
        width:'90%', 
        marginHorizontal:20,
        borderRadius:20,
        borderColor:'green',
        borderWidth: 2
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

    

export default AddResolveScreen