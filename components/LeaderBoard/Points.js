// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
// import { db } from '../../firebase'

// const [points,setPoints] = useState()

// useEffect(() => {
//     try {
//         const getPoint =query((collection(db, 'users')),orderBy("points", "desc"))
//         // collection(db, 'spots')
        
//         onSnapshot(getPoint,(snapshots)=>{
//             let PointDisplay = [];
//             snapshots.docs.map((doc)=>{

//               PointDisplay.push({...doc.data(),id:doc.id})
//                 // console.log(doc.id);
              
//               // console.log(doc.caption)

//             })
//           setPoints(PointDisplay)
            

//         })

         
//     } catch (error) {

//         let PointDisplay = [];
//         setChats(PointDisplay)

//     }


// }, [])

// console.log(points)
// const Points = () => {
//   return (
//     <View>
//         {points && points.map((point) => (
//      <View key={point.id}>
//       <Text>Points</Text>
//       <Text>{point.username}</Text>
//       <Text>{point.points}</Text>
//       </View>
//         ))}
//     </View>
//   )
// }

// export default Points