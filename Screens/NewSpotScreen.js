import React from 'react'
import { View, Text, SafeAreaView,StyleSheet} from 'react-native'
import AddNewSpot from '../components/NewSpot/AddNewSpot'




const NewSpotScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView  style={styles.container}>
            <AddNewSpot navigation={navigation}/>
            <Text></Text>
        </SafeAreaView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'pink', 
        flex:1
    }
})


export default NewSpotScreen