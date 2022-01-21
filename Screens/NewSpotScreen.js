import React from 'react'
import { View, Text, SafeAreaView,StyleSheet} from 'react-native'
import AddNewSpot from '../components/NewSpot/AddNewSpot'




const NewSpotScreen = ({navigation}) => {
    return (
        <SafeAreaView  style={styles.container}>
            <AddNewSpot navigation={navigation}/>
            <Text></Text>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'pink', 
        flex:1
    }
})


export default NewSpotScreen