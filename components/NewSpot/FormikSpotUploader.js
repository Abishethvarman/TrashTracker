import React, { useState,useEffect } from 'react'
import { View, Text, Image, TextInput, Button, StyleSheet,TouchableOpacity,Picker,ScrollView} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import { render } from 'react-dom';
import PickerSev from './Picker'
import { Feather } from '@expo/vector-icons';
import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc } from '../../firebase'
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import Locate from './location'



/*/Counter
const AddCounter = () => {
    
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row', alignItems:'space-between'}}>
    <Button title='-' 
      onPress={()=>{setCounter(counter-1)}} style={styles.CounterButton}/>
    <Text style={{color:'black', marginTop:50}}>Polythenes</Text>
    <Button title='+' 
      onPress={()=>{setCounter(counter+1)}}/>
      <Text style={{color:'black'}}>{counter}</Text>
    </View>
        
    </View>
  );
  
};

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
        flexDirection:'row',
        marginTop:5,
        justifyContent:'space-between'
    },

    CounterButton:{
        width:'1000',
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',

    },

    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:25


    },
    headerText:{
        color:'green',
        fontWeight:'700',
        marginRight:20,
        fontSize:20

    }
})
/*/
//const PLACEHOLDER='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaAYTNs6WDJ81eDUsMXp6ODKv2s_mp7I14qlnYoej0WCYY5558l2GomfHIPs_perUZvI&usqp=CAU'
//const PLACEHOLDER='https://thumbs.dreamstime.com/b/add-photo-icon-isolated-white-background-camera-plus-new-vector-stock-173611946.jpg'

//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
//'https://static.thenounproject.com/png/558475-200.png'

const FormikSpotUploader = () => {
    //const[thumbnail,setThumbnail]=useState(PLACEHOLDER)
    const [counter, setCounter]=useState(0);
    const [counter1, setCounter1]=useState(0);
    const [counter2, setCounter2]=useState(0);
    const [counter3, setCounter3]=useState(0);
    const [counter4, setCounter4]=useState(0);
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

const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });



    if (!result.cancelled) {
        setImage(result.uri);
    }
};

const AddSubmit = async (blogTitle, description, category, language) => {
    let ImgUrl;
    let DocUrl;

    if (image) {
        const response1 = await fetch(image);
        const blob1 = await response1.blob();
        const imgRef = ref(storage, `images/blog/${new Date().getTime()}`);
        const snap = await uploadBytes(imgRef, blob1);
        const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        ImgUrl = downloadUrl;
    }
    
    await addDoc(collection(db, 'spots'), {
        title: blogTitle,
        description,
        seviority,
        language,
        createAt: new Date(),
        titleImage: ImgUrl,
        file: DocUrl,
        uid: auth.currentUser.uid,
        username: user.username,
        usermail: user.email,
        UserPic: user.pro_pic,
        book_mark_by: []

    }).then(() => {
        Alert.alert('Successfully Added');
        navigation.navigate('HomeScreen');
    })

}

const uploadPostSchema= Yup.object().shape({

    //imageurl: Yup.string().url().required('A photo is rquired'),
    //file: Yup.mixed().required('A file is required'), AddSubmit(values.caption, values.placespot, values.seviority);
    caption: Yup.string().max(1000,'caption reached too much of charectrs'),
    placespot:Yup.string().required('caption reached too much of charectrs'),
    
}) 

    return (
        <View>
            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center', height: 100, }} >
                    <Image source={{ uri: image }} style={{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: 20 }}></Image>
            </TouchableOpacity>
        <Formik
            initialValues={{caption:'', placespot:''}}
            onSubmit={values=>console.log(values) }
        
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
        
        {({
            handleBlur,
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
            selectedValue,
            onValueChange
        })=>(
        <>
        <View style={{marginLeft:5, marginTop:5, flexDirection:'row'}}> 
            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center', height: 100, }} >
                    <Image source={{ uri: image }} style={{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: 20 }}></Image>
            </TouchableOpacity>
            {/*<Image 
            source={{uri: thumbnail ? thumbnail : PLACEHOLDER}} 
            style={{width:100,height:100}}/>*/}


            <View style={{flex:1, marginLeft:12}}>
                <TextInput 
                    style={{color:'white', fontSize:20}}
                    placeholder="Write a caption..." 
                    placeholderTextColor='gray'
                    multiline={true}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                >
                </TextInput>
                <Divider width={0.1} orientation='vertical'/>
                <TextInput 
                    style={{color:'white', fontSize:20}}
                    placeholder="Name of this spot" 
                    placeholderTextColor='gray'
                    multiline={false}
                    onChangeText={handleChange('placespot')}
                    onBlur={handleBlur('placespot')}
                    value={values.placespot}
                >
                </TextInput>

            </View>
        
        </View>
        <ScrollView>
        <Divider width={0.1} orientation='vertical'/>

        {/*<TextInput
            onChange={(e)=>setThumbnail (e.nativeEvent.text)} 
            style={{color:'white', fontSize:18}}
            placeholder="Upload the url of your photo "/*url of the video
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('imageurl')}
            onBlur={handleBlur('imageurl')}
            value={values.imageurl}
        />*/}

        {/*<TextInput
            
            style={{color:'white', fontSize:18}}
            placeholder="counter "/*url of the video
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('counter')}
            onBlur={handleBlur('counter')}
            value={values.counter}
        />*/}
        

        


        {/*errors.imageurl &&(
            <Text style={{fontSize:10, color:'red'}}>
                {errors.imageurl}
            </Text>
        )*/}

        {/*/AddCounter*/}
        
        <View style={{justifyContent:'center',alignItems:'center' }}>
        <Text style={{ fontWeight: 'bold', letterSpacing: 1, color:'white', fontSize:20, }}>Sevieority</Text>
                        <Picker style={styles.textBox} selectedValue={values.seviority} onValueChange={handleChange('seviority')} >

                            <Picker.Item label="Normal" values="Normal" />
                            <Picker.Item label="Modrate" values="Moderate" />
                            <Picker.Item label="High" values="High" />
                        </Picker>
        </View>
        

        <View>
            <View style={{alignItems:'center'}}>
            <Text style={{color:'green', alignItems:'center', fontSize:32}}>Add the rough count</Text>
            </View>
            
        {/*Polythene bags */}
        <View>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{setCounter(counter-1)}}>
            <Feather name="minus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', alignItems:'center', fontSize:25}}>Polythenes Bags     </Text>
        <TouchableOpacity 
        onPress={()=>{setCounter(counter+1)}}>
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', fontSize:25}}>{counter}</Text>
        </View>
            
        </View>
            {/*PET Bottles */}
        <View>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{setCounter1(counter1-1)}}>
            <Feather name="minus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', alignItems:'center', fontSize:25}}>PET Bottles              </Text>
        <TouchableOpacity 
        onPress={()=>{setCounter1(counter1+1)}}>
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', fontSize:25}} value={values.counter1} onValueChange={handleChange('seviority')}>{counter1}</Text>
        </View>
            
        </View>

            {/*Plastic Debris*/}
        <View>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{setCounter2(counter2-1)}}>
            <Feather name="minus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', alignItems:'center', fontSize:25}}>Plastic Debris          </Text>
        <TouchableOpacity 
        onPress={()=>{setCounter2(counter2+1)}}>
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', fontSize:25}}>{counter2}</Text>
        </View>
            
        </View>

            {/*Food wrappers */}
        <View>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{setCounter3(counter3-1)}}>
            <Feather name="minus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', alignItems:'center', fontSize:25}}>Food Wrappers        </Text>
        <TouchableOpacity 
        onPress={()=>{setCounter3(counter3+1)}}>
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', fontSize:25}}>{counter3}</Text>
        </View>
            
        </View>

        {/*Large plastic rigid */}
        <View>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{setCounter4(counter4-1)}}>
            <Feather name="minus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', alignItems:'center', fontSize:25}}>Large Plastic Rigids</Text>
        <TouchableOpacity 
        onPress={()=>{setCounter4(counter4+1)}}>
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white', fontSize:25}}>{counter4}</Text>
        </View>
            
        </View>
        
        </View>

        <Divider width={0.1} orientation='vertical'/>
        <Text> </Text>
        </ScrollView>
        <Button color='red' onPress={handleSubmit} title='track' disabled={!isValid} />
        </>
        )}
        </Formik>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
        flexDirection:'row',
        marginTop:5,
        justifyContent:'space-between',
        alignItems:'center'
    },

    CounterButton:{
        width:'1000',
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',

    },

    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:25


    },
    headerText:{
        color:'green',
        fontWeight:'700',
        marginRight:20,
        fontSize:20

    },
    textBox: {
        borderWidth: 1,
        borderColor: 'red',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
        elevation: 1,
        marginTop: 10,
        paddingHorizontal: 10,

    },
    textField: {
        paddingHorizontal: 10,}
})


export default FormikSpotUploader
