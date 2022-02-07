import { View, Text, Button, Pressable,StyleSheet } from 'react-native';
import React,{useState} from 'react';

const AddCounter = () => {
    const [counter, setCounter]=useState(0);
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row', alignItems:'space-between'}}>
    <Button title='-' 
      onPress={()=>{setCounter(counter-1)}} style={styles.CounterButton}/>
    <Text style={{color:'black', marginTop:50}}>Polythenes</Text>
    <Button title='+' 
      onPress={()=>{setCounter(counter+1)}}/>
      <Text style={{color:'black'}}>{counter}</Text>
    </View>
        
    </View>
  );
  
};

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
        flexDirection:'row',
        marginTop:5,
        justifyContent:'space-between'
    },

    CounterButton:{
        width:'1000',
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',

    },

    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:25


    },
    headerText:{
        color:'green',
        fontWeight:'700',
        marginRight:20,
        fontSize:20

    }
})



export default AddCounter;
