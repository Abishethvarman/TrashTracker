import React from 'react'
import{SafeAreaView,Text,StyleSheet, ScrollView} from 'react-native'
import Header  from '../components/Home/Header'
import TrashSpot  from '../components/Home/TrashSpot'
import BottomTabs,{bottomTabIcons} from '../components/ButtonTabs'
import Events from '../components/Home/Events'
import Search from '../components/Home/Search'
import ResolvedPlaces from '../components/Home/ResolvedPlaces'


const HomeScreen=({navigation})=> {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Search/>
            
            <ScrollView>
            <TrashSpot navigation={navigation}/>
            <Events/>
            <ResolvedPlaces/>
            </ScrollView>
        </SafeAreaView>
        
    )
}
/*<BottomTabs icons={bottomTabIcons}/>*/
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#BCC6CC', 
        flex:1
    },

}) 
export default HomeScreen