import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native'
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
                <Pressable color='pink' onPress={handleSubmit} disabled={!isValid} >
                  <Text>That's it!!</Text>
                </Pressable>
    </View>
  )}
  </Formik>
  )
}

export default ChatForm