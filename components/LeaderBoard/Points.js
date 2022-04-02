import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { Title } from 'react-native-paper'


const Points = () => {

    const [points,setPoints] = useState()

useEffect(() => {
    try {
        const getPoint =query((collection(db, 'users')),orderBy("points",'desc'))
        // collection(db, 'spots')
        
        onSnapshot(getPoint,(snapshots)=>{
            let PointDisplay = [];
            snapshots.docs.map((doc)=>{

              PointDisplay.push({...doc.data(),id:doc.id})
                // console.log(doc.id);
              
              // console.log(doc.caption)

            })
          setPoints(PointDisplay)
            

        })

         
    } catch (error) {

        let PointDisplay = [];
        setPoints(PointDisplay)

    }


}, [])

console.log(points)

  return (
    <View>
        <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: 'red',
          borderRightWidth: 1
        }]}>
          <Title>Tracker</Title>
          {/* <Caption>Wallet</Caption> */}
        </View>
        <View style={styles.infoBox}>
          <Title style={{alignItems:'center'}}>Points</Title>
          {/* <Caption>Orders</Caption> */}
        </View>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false}>
        {points && points.map((point) => (
            
     <View key={point.id}>

      <View style={styles.infoBoxWrapper2}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>{point.username}</Title>
          {/* <Caption>Wallet</Caption> */}
        </View>
        <View style={styles.infoBox}>
          <Title>{point.points}</Title>
          {/* <Caption>Orders</Caption> */}
        </View>
      </View>
      
      </View>
      
        ))}
        </ScrollView>
    </View>
  )
}

const styles =StyleSheet.create({
    infoBoxWrapper: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBoxWrapper2: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 50,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default Points