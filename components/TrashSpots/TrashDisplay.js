import { View, Text,TouchableOpacity,StyleSheet,ScrollView, ImageBackground } from 'react-native'
import React ,{useEffect,useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { auth, db } from '../../firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import Search from '../Home/Search';


const TrashDisplay = ({navigation}) => {
  const [spots,setSpots] = useState()

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
            setSpots(spotARR)
              

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

       {spots && spots.map((spot) => ( 
        <TouchableOpacity key={spot.id} onPress={()=>navigation.navigate('TrashList',{spot})}>
        <View  style={{marginBottom:7, marginHorizontal:15}}>
            <ImageBackground style={Styles.suggestImg} 
                source={{uri:spot.titleImage}}
                    imageStyle={{ borderRadius: 20 }} >
                        <View style={{flexDirection:'row-reverse'}}>
                        <View style={Styles.seviorityDetail}>
                            <Text style={Styles.sevierText}>{spot.seviority}</Text>
                        </View>
                        </View>
                    <View style={Styles.suggestTextWrapper}>

                        <Text></Text>

                        <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                            <Entypo name="location-pin" size={24} color="#19B4BF" />
                            <Text style={Styles.suggestplaceText}>{spot.place}</Text>
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
          <Entypo name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
          <Text>    </Text>
          <Text style={[Styles.header,{fontWeight:"bold"}]}> Trash</Text> 
            <Text style={Styles.header}>hot spots</Text>
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
      color:"white",
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

export default TrashDisplay