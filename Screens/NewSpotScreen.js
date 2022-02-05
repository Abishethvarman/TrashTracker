import React from 'react'
import { View, Text, SafeAreaView,StyleSheet} from 'react-native'
import AddNewSpot from '../components/NewSpot/AddNewSpot'
import SpotImage from '../components/NewSpot/SpotImage'


const NewSpotScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView >
            <AddNewSpot navigation={navigation}/>
            
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