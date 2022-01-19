import React from 'react'
import { View, Text,Image,StyleSheet,TouchableOpacity,TextInput, SafeAreaView } from 'react-native'
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Header = ({navigation}) => {
    return (
       <SafeAreaView style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/trash-for-trade-logo-png.png')}/>
                </TouchableOpacity>
            <View style={styles.iconContainer}>
               <TouchableOpacity>
                    <View style={styles.readableBadge}>
                        <Text style={styles.unreadableText}>2</Text>
                    </View>
                    <Ionicons name="notifications" size={30} color="black" />
                </TouchableOpacity>  
                <Text style={{color:'transparent'}}>'  '</Text>

                {/*User icon */}
                <TouchableOpacity>
                <FontAwesome name="user-circle-o" size={30} color="black" />
                </TouchableOpacity>
            </View>
             
        </SafeAreaView>
        

    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        height:100

    },
    logo:{
        height:150,
        width:150,
        resizeMode:"contain"
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    icons:{
        width:30,
        height:30,
        marginLeft:10,
       
    },
    readableBadge:{
        backgroundColor:"red",
        alignItems:"center",
        position:"absolute",
        left:14,
        bottom:16,
        width:20,
        height:15,
        borderRadius:10,
        justifyContent:"center",
        zIndex:100
    },
    unreadableText:{
        color:"white",
        fontWeight:"400",
        fontSize:10
    },

    
})
export default Header;
