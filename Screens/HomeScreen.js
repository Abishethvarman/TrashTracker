import React from 'react'
import{SafeAreaView,Text,StyleSheet, ScrollView} from 'react-native'
import Header  from '../components/Home/Header'
import TrashSpot  from '../components/Home/TrashSpot'
import BottomTabs,{bottomTabIcons} from '../components/ButtonTabs'
import Events from '../components/Home/Events'
import Search from '../components/Home/Search'

Events
const HomeScreen=({navigation})=> {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Search/>
            <BottomTabs icons={bottomTabIcons}/>
            <ScrollView>
            <TrashSpot/>
            <Events/>
            <Events/>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#BCC6CC', 
        flex:1
    },

}) 
export default HomeScreen