/*
import { View, Text } from 'react-native';
import React, { useState, useEffect }  from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"
import { SignedInStack,SignedOutStack } from './navigation';

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = (users) => {
        users ? setCurrentUser(users) : setCurrentUser(null);
    }
   
    useEffect(() => 
         onAuthStateChanged(auth, users => userHandler(users))
      
    , [])
  return (
    <>
    {currentUser ? <SignedInStack /> : <SignedOutStack />}
    </>
  );
};

export default AuthNavigation;
*/

import { onAuthStateChanged } from '@firebase/auth';
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { auth } from './firebase'
import { SignedInStack, SignOutStack } from './navigation'





export default function AuthNavigation() {
    // null means initial false so first login page will be assign then 
    // after signin state will be change to true so homepage will be assign
    const [currentUser, setCurrentUser] = useState(false);

    const useHandler = () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(true);
            }
            else {
                setCurrentUser(false);
            }
        })
    }
    useEffect(() => {
        useHandler();
    })



    return (
        <>
            {currentUser ? <SignedInStack /> : <SignOutStack />}
        </>
    )
}