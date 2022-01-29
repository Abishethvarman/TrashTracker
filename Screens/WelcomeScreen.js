import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Welcome from '../components/Welcome/Welcome'


const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.LogoContainer}>
                <Image style={styles.Logo}  source={require('../assets/logo.png')}/>
                
            </View>
            <Welcome navigation={navigation}/>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        backgroundColor:'#BCC6CC',
        flex:1
    },
    LogoContainer:{
        alignItems:'center',
        marginTop:60

    },
    Logo: {
        height: 150,
        width: 150,
        resizeMode: "contain",
        marginTop:100
    }
})

export default WelcomeScreen
