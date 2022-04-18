import { View, Text, TextInput, Button, Alert, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useNavigation } from '@react-navigation/native'

const uploadPostSchema= Yup.object().shape({

  //imageurl: Yup.string().url().required('A photo is rquired'),
  //file: Yup.mixed().required('A file is required'), AddSubmit(values.caption, values.placespot, values.seviority);
  // caption: Yup.string().max(1000,'caption reached too much of charectrs'),
  caption:Yup.string().required('caption reached too much of charectrs'),
  
}) 

const ChatForm = () => {
  const navigation = useNavigation();


  const AddSubmit = (caption) => {

     addDoc(collection(db,'chats'), {
        caption: caption,
        createAt: new Date(),
        uid: auth.currentUser.uid,
        //username: users.username,
        usermail: auth.currentUser.email,
        
       
        
  
    }).then(() => {
        Alert.alert('Successfully Added');
        navigation.push('ForumScreen');
    })
  
  }

  return (
    <Formik
            initialValues={{caption:''}}
            onSubmit={values=> {
                AddSubmit(values.caption);
            } }
        
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

    <View style={{flex:1, marginLeft:12,}}>
        <View style={{borderWidth:2, marginHorizontal:5, height:150, borderColor:'#00ffff'}}>
                <TextInput 
                    style={{color:'white', fontSize:20}}
                    placeholder="Cast your thought here" 
                    placeholderTextColor='gray'
                    autoCorrect={true}
                    maxLength={200}
                    multiline={true}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                    
                >
                </TextInput>
          </View>

                <Pressable style={Styles.Button} onPress={handleSubmit} disabled={!isValid} onBlur >
                  <Text style={Styles.buttonText}>That's it!!</Text>
                </Pressable>
    </View>
  )}
  </Formik>
  )
}

const Styles=StyleSheet.create({
  Button:{
  
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    elevation: 10,
    margin:10,
    backgroundColor:'#50C878',
    width:'95%',
    height:60,
    bottom:10,
    position:'absolute'
    
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#800000',
  },
})

export default ChatForm