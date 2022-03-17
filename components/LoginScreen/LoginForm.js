import React,{useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity,Alert } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import EmailValidator from 'email-validator'
import firebase,{auth} from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'


const LoginForm = ({navigation}) => {
    const LoginFormSchema= Yup.object().shape({
        email:Yup.string().email().required('a email is required'),
        password:Yup.string().required().min(8,'your password must have atleast 8 charectors')
    })
     const onLogin=async(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
       .then((re) => {
           console.log("Sucessfully log in ");
           navigation.navigate("HomeScreen");
       })
       .catch((re) => {
           console.log(re.message + "hi");
           Alert.alert(
               "You entered the email or password wrongly",
               "If you not registered, click SignUp",
           [{ text: "SignUp", onPress: () => navigation.push("SignupScreen") },
               {text: "Try again" }
           ])
    })

        //  try{
        //     await firebase.auth().signInWithEmailAndPassword(email,password)
        //     console.log('firebase success',email,password)
        //  }catch(error){
        //      Alert.alert(error.message)
        //  }
     }

    return (
        <View style={styles.wrapper}>
            <Formik 
                initialValues={{email:'', password:''}}
                onSubmit={(values)=>{onLogin(values.email,values.password)}}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >

            {({handleChange,
             handleBlur, 
             handleSubmit, 
             values,
             isValid})=>(
                <>
            <View 
                style={[
                    styles.inputField,
                        {
                            borderColor:
                            values.email.length<1 || EmailValidator.validate(values.email)
                            ? '#ccc'
                            : 'red',
                        },
                    ]}
            >
                <TextInput
                    placeholder='e-mail id'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                >
                </TextInput>
           </View>

           <View style={[
                    styles.inputField,
                        {
                            borderColor:
                            1>values.password.length || values.password.length >=8
                            ? '#ccc'
                            : 'red',
                        },
                    ]}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                >
                </TextInput>
           </View>
          

            <View style={{alignItems:'flex-end',marginBottom:30}}>
                <Text style={{color:'#1E90FF'}}> Forgot Password? </Text>
            </View>
    
            <Pressable 
                titleSize={20} 
                style={styles.button(isValid)} 
                onPress={handleSubmit} disabled={!isValid}
            > 
               <Text>Log In</Text> 
            </Pressable>


            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:5}}>
                    <Text style={{color:'black', fontSize:15}}>Dont you have account?</Text>
                <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
                    <Text style={{color:'#1E90FF', fontSize:15}}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            </>
            )}   
            </Formik>
        </View>
    )
}

const styles=StyleSheet.create({
    wrapper:{
        marginTop:80
    },
    
    inputField:{
        borderRadius:5,
        padding:5,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    button:(isValid)=>({
        backgroundColor: isValid ? '#1E90FF' : '#9ACAF7',
        borderRadius:5,
        alignItems:'center',
        padding:10
    })
})

export default LoginForm
