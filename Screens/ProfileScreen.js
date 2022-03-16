import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, StyleSheet,TouchableOpacity, Image} from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import Share from 'react-native-share';
import files from '../assets/logo.png'
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const Header = ({navigation})=>(
  <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.push("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={30} color="purple" />
          </TouchableOpacity>
          <Text style={styles.headerText}>I'm at TrashTracker</Text>
          <Text> </Text>
      </View>
)

const ProfileScreen = () => {

  // const user = useSelector(SignInUser);
    const user = async() => {}
    const [cUser, setCuser] = useState()
    
    // const [image, setImage] = useState(user.pic);
    const uploadImage = 'https://icon-library.com/images/upload-photo-icon/upload-photo-icon-16.jpg'
    const [image, setImage] = useState(uploadImage);

    //Profile image picker 
  
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
          
              console.log(result);
          
              if (!result.cancelled) {
                  setImage(result.uri);
                  
                
            }
            let ImgUrl;
        
            // if (image != user.pic) {
              if (image) {
                const response1 = await fetch(image);
                const blob1 = await response1.blob();
                const imgRef = ref(storage, `Profile_image/${new Date().getTime()}`);
                const snap = await uploadBytes(imgRef, blob1);
                const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
                ImgUrl = downloadUrl;
               
                }
           if(ImgUrl)  
           { await updateDoc(doc(db,'users',user.uid), {
                pic:ImgUrl
    
           })
           
           console.log("uploaded")}

        }
        catch(error) {
            console.log(error)
        }
       
    };

      //Share option
  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Join together for a wholesome initiative, Install "Trash Tracker" to track the trash',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };
   
  const getUser = async () =>
    {
        try {

            const ref = doc(db, "users", user.uid)
            onSnapshot(ref, (snapshot) => {
                // console.log(snapshot.data())

                setCuser(snapshot.data())
                       
                })
            console.log(cUser)
            
        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUser()
    },[])


  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.userInfoSection}>
        <View style={{alignItems:'center', justifyContent:'center',flexDirection: 'column', marginTop: 20}}>
        <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center', height: 100, }} >
                    <Image source={{ uri: image }} style={{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: 20 }}></Image>
            </TouchableOpacity>
          {/* <TouchableOpacity onPress={pickImage} style={styles.pen}>
              <Entypo  name="pencil" size={25} color="black" />
              </TouchableOpacity> */}
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Abishek</Title>
            <Caption style={styles.caption}>abishek123</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:20}}>Batticaloa</Text>
        </View>
        {/* <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View> */}
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:20}}>abishethvarman@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Points</Title>
            {/* <Caption>Wallet</Caption> */}
          </View>
          <View style={styles.infoBox}>
            <Title>100</Title>
            {/* <Caption>Orders</Caption> */}
          </View>
      </View>

      <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>Share with your network</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow',
  },
   userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
    marginTop:5
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 26,
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:30

},
headerText:{
    color:'black',
    fontWeight:'700',
    marginRight:20,
    fontSize:30

} 
});