import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'


const PLACEHOLDER='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaAYTNs6WDJ81eDUsMXp6ODKv2s_mp7I14qlnYoej0WCYY5558l2GomfHIPs_perUZvI&usqp=CAU'
const uploadPostSchema= Yup.object().shape({
    imageurl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200,'caption reached too much of charectrs')
})


const FormikSpotUploader = () => {
    const[thumbnail,setThumbnail]=useState(PLACEHOLDER)
    return (
        <View>
        <Formik
            initialValues={{caption:'', imageurl:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
        {({
            handleBlur,
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid
        })=>(
        <>
        <View style={{marginLeft:5, marginTop:5, flexDirection:'row'}}> 
            <Image 
            source={{uri: thumbnail ? thumbnail : PLACEHOLDER}} 
            style={{width:100,height:100}}/>
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
            </View>
        
        </View>
        <Divider width={0.1} orientation='vertical'/>

        <TextInput
            onChange={(e)=>setThumbnail (e.nativeEvent.text)} 
            style={{color:'white', fontSize:18}}
            placeholder="Enter the "/*url of the video*/
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('imageurl')}
            onBlur={handleBlur('imageurl')}
            value={values.imageurl}
        />
        {errors.imageurl &&(
            <Text style={{fontSize:10, color:'red'}}>
                {errors.imageurl}
            </Text>
        )}
        <Button color='blue' onPress={handleSubmit} title='track' disabled={!isValid}/>
        </>
        )}
        </Formik>
        </View>
    )
}

export default FormikSpotUploader
