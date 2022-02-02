import { View, Text, StyleSheet,TextInput,FlatList } from 'react-native';
import React,{useState} from 'react';
import { AntDesign,Ionicons } from '@expo/vector-icons';

const Search = () => {
const DATA = [
  {
    id: "1",
    title: "Batticaloa",
  },
  {
    id: "2",
    title: "Kallady",
  },
  {
    id: "3",
    title: "Polonoruwa",
  },
];


const [enter, setEnter] = useState(null);
const [masterArray, setMasterArrary] = useState(DATA)
const [filterArray, setFilterArray] = useState(DATA)
const [search,setSearch] = useState()


// search filter
 const SearchFilter = (text) => {
  if (text)
  {
      const newData = masterArray.filter((item) => {
          const itemData = item.title ? item.title.toUpperCase()
              : "".toUpperCase();
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
      });
      setFilterArray(newData)
      setSearch(text)
  }
  else {
      setFilterArray(masterArray)
      setSearch(text)
  }
}

const ItemView = ({ item }) => {
  return (
    
          <Text style={styles.listText}>{item.title}</Text>
          
    
      
  )
  

}


  return (
    <View style={styles.searchWrapper}>
      <View style={styles.search}>
        <AntDesign name="search1" size={20} color="black" />
          <TextInput style={styles.searchtext} placeholder='Search trash spots and events' 
          value={search}
          underlineColorAndroid={"transparent"}
          onTouchStart={() => setEnter("hi")}
          onChangeText={(value) => SearchFilter(value)}
          // onFocus={(value) => console.log(value)}
          onEndEditing={() => setEnter(null)}/>   
     </View>
     {enter ? <View style={styles.searchList}>
                <FlatList
                    data={filterArray}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={ItemView}
                    // ItemSeparatorComponent={ItemSpearatorView}
                />
            </View> : null}
    </View>
  );
};
 const styles= StyleSheet.create({
    searchWrapper: {
        alignItems:"center"
    },
    search: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: "87%",
        borderRadius: 13,
        
    },
    searchtext: {
        
        fontSize: 17,
        color: "#afafb1",
    },
    searchList: {
      backgroundColor: "#eff7fa",
      width: "80%",
      marginTop: 13,
      paddingLeft:25,
    marginLeft:40,
      zIndex:500
  },
  listText: {
      fontSize: 18,
      paddingBottom:5
  }
 })

export default Search;
