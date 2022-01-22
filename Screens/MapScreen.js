import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = ()=> {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <MapView style={styles.map} 
      initialRegion={{
        /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
      latitude: 7.95,
      longitude: 80.670837,
      latitudeDelta: 2,
      longitudeDelta: 2.4,
    }}
  />
    </SafeAreaView>
  );
}

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="red" />
          </TouchableOpacity>
          
          <Text style={styles.headerText}>Trash in map</Text>
          <Text></Text>
          
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
    marginHorizontal:10,
    marginTop: StatusBar.currentHeight
  },
  map: {
    width: Dimensions.get('window').width-20,
    height: Dimensions.get('window').height-50,
    marginBottom:0,
    marginTop:0
  },
  headerContainer:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

},
headerText:{
    color:'black',
    fontWeight:'700',
    marginRight:20,
    fontSize:20

}
});

export default MapScreen