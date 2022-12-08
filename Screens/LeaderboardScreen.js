import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Leaderboard from 'react-native-leaderboard';
import points from '../components/LeaderBoard/Points';
import Points from '../components/LeaderBoard/Points';

const LeaderboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <Points/>
    </SafeAreaView>
  );
};

const Header = ({navigation})=>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.push('HomeScreen')}>
            <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Leaderboard</Text>
            <Text> </Text>
        </View>
)

/*const LeaderBoard = () =>(
    this.state = {
    data: [
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
}

render() {
  return (
      <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>)
}
);*/

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#05787c',
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30

    },
    headerText:{
        color:'white',
        fontWeight:'700',
        marginRight:20,
        fontSize:20

    } 
})
export default LeaderboardScreen;
