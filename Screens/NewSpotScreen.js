import React from 'react'
import { View, Text, SafeAreaView,StyleSheet} from 'react-native'
import AddNewSpot from '../components/NewSpot/AddNewSpot'
import SpotImage from '../components/NewSpot/SpotImage'


const NewSpotScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView  style={styles.container}>
            <AddNewSpot navigation={navigation}/>
            //<Text style={{color:black}}>Hey</Text>
        </SafeAreaView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black', 
        flex:1,
        
    }
})


export default NewSpotScreen