import { View, Text, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React ,{useEffect,useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { auth, db } from '../../firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import Search from '../Home/Search';


const ResolveDisplay = ({navigation}) => {
    
      const [resolves,setResolves] = useState()
    
      useEffect(() => {
          try {
              const wef =query((collection(db, 'spots')), orderBy("createAt",'desc'))
              // collection(db, 'spots')
              
              onSnapshot(wef,(snapshots)=>{
                  let spotARR = [];
                  snapshots.docs.map((doc)=>{
    
                      spotARR.push({...doc.data(),id:doc.id})
                      // console.log(doc.id);
                  
    
                  })
                setResolves(spotARR)
                  
    
              })
    
               
          } catch (error) {
    
              let spotARR = [];
              setSpots(spotARR)
    
          }
    
    
      }, [])
    
    
      return (
          
        <View style={Styles.container}>
            
            
                <View style={Styles.headerWrapper} >
                <Header navigation={navigation}/>
                
                
            </View>
            <Search style={{marginTop:0}}/>
           
    
            <ScrollView verical={true} showsHorizontalScrollIndicator={false}>
    
           {resolves && resolves.map((resolve) => ( 
            <TouchableOpacity key={resolve.id} onPress={()=>navigation.navigate('ResolveList',{resolve})}>
            <View  style={{marginBottom:7, marginHorizontal:15}}>
                <ImageBackground style={Styles.suggestImg} 
                    source={{uri:resolve.titleImage}}
                        imageStyle={{ borderRadius: 20 }} >
                            <View style={{flexDirection:'row-reverse'}}>
                            <View style={Styles.seviorityDetail}>
                                <Text style={Styles.sevierText}>{resolve.seviority}</Text>
                            </View>
                            </View>
                        <View style={Styles.suggestTextWrapper}>
    
                            <Text></Text>
    
                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>{resolve.place}</Text>
                            </View>
    
                        </View>
                </ImageBackground> 
                </View>
                </TouchableOpacity>
            ))} 
             
                </ScrollView>
            
        </View>
    )
    
            }
    
    
    
    const Header = ({navigation})=>(
      <View style={styles.headerContainer}>
              <TouchableOpacity navigation= {navigation} onPress={()=> navigation.push('HomeScreen')}>
              <Entypo name="chevron-left" size={30} color="black" />
              </TouchableOpacity>
              <Text>    </Text>
              <Text style={[Styles.header,{fontWeight:"bold"}]}> Resolved</Text> 
                <Text style={Styles.header}> spots</Text>
              <Text> </Text>
          </View>
    )
    
    const Styles = StyleSheet.create({
      container: {
          marginTop: 20,
        //   backgroundColor:'pink'
          // paddingHorizontal:20
        
      },
      headerWrapper: {
          flexDirection: "row",
          marginBottom: 10,
          marginTop:10,
          alignItems:'flex-start'
      },
      header: {
          fontSize: 30,
          color:"#4c4c4b",
          marginRight:10,
          
      },
      suggestImg: {
          width: 380,
          height: 220,
          marginRight:10
          
      },
      suggestTextWrapper: {
          flex:1,
          justifyContent: "space-between",
          marginHorizontal:0
      },
      suggestBottom: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
          width: 380,
          
      },
      suggestText: {
          fontSize: 16,
          color: "white",
          fontWeight: "bold",
          paddingVertical:10,
          paddingHorizontal: 10,
          
      },
      suggestplace: {
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingTop: 7,
         
      },
      suggestplaceText: {
          fontSize: 17,
          color: "white",
          fontWeight: "bold",
          paddingBottom:10
      },
      seviorityDetail:{
            
        margin:10,
        backgroundColor:'#f70d1a',
        width:'20%',
        height:'75%',
        borderRadius:10,
        alignItems:'center'
        
        
    },
    sevierText:{
        color:'#fff005',
        fontSize:10,
        paddingTop:10
        
    },
      })
    
    const styles=StyleSheet.create({
    container:{
        backgroundColor:'#50C878',
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:0
    
    },
    headerText:{
        color:'white',
        fontWeight:'700',
        marginRight:20,
        fontSize:30
    
    },
    
    })
    
    

export default ResolveDisplay