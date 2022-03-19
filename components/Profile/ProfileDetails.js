
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons';
// import Share from 'react-native-share';
import files from '../../assets/logo.png'
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const ProfileDetails = ({navigation}) => {

  // const user = async() => {}
  // const [image, setImage] = useState(user.pic);
  const uploadImage = 'https://icon-library.com/images/upload-photo-icon/upload-photo-icon-16.jpg'
  // const [image, setImage] = useState(null);
  const [user, setuser] = useState();

  
  const getUser = async () => {
    try {

      const ref = doc(db, "users", auth.currentUser.uid)
      onSnapshot(ref, (snapshot) => {
        console.log(snapshot.data())

        setuser(snapshot.data())

      })
      // console.log(user)

    }
    catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])


 
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert('Sorry, we need permossion of your gallery to change profile picture!');
        }
      }
    })();
  }, []);
  
 //Profile image picker 
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      // console.log(result);
      let ImgUrl;
      if (result.uri) {
        const response1 = await fetch(result.uri);
        const blob1 = await response1.blob();
        const imgRef = ref(storage, `Profile_image/${new Date().getTime()}`);
        const snap = await uploadBytes(imgRef, blob1);
        const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        ImgUrl = downloadUrl;


      }



      if (ImgUrl) {

        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
          profile_pic: ImgUrl
          

        })

        console.log("uploaded")
        Alert.alert('Profile Picture has changed');
      }

    }
    catch (error) {
      // console.log(error)
    }

  };

  //Share option
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Join together for a wholesome initiative, Install "Trash Tracker" to track the trash',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: 20 }}>
          <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center', height: 100, }} >

            <Image source={{ uri: user ? user.profile_pic : uploadImage }} style={{ width: 100, height: '100%', resizeMode: 'contain', borderRadius: 20 }}></Image>

          </TouchableOpacity>

          {/* <TouchableOpacity onPress={pickImage} style={styles.pen}>
          <Entypo  name="pencil" size={25} color="black" />
      </TouchableOpacity> */}
          <View style={{ marginLeft: 20 }}>
          {user && <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>{user.username}</Title>}
            <Caption style={styles.caption}>abishek123</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>Batticaloa</Text>
        </View>
        {/* <View style={styles.row}>
      <Icon name="phone" color="#777777" size={20}/>
      <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
    </View> */}
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
         {user &&  <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>{user.email}</Text> }
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
      </TouchableRipple>*/}
    <TouchableRipple onPress={()=>navigation.push('EditProfileScreen')}>
       <View style={styles.menuItem}>
       <AntDesign name="edit" size={24} color="black" />
         <Text style={styles.menuItemText}>Edit info</Text>
       </View>
     </TouchableRipple> 
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
          <AntDesign name="sharealt" size={24} color="black" />
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 5
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
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },

});

export default ProfileDetails;