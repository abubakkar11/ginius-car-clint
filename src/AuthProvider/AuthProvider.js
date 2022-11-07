import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

   const creteUser = (email ,password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
   }

   const logIn = (email , password) =>{
   return signInWithEmailAndPassword(auth , email , password)
   }
 
  useEffect(()=>{
  const unsubcribe = onAuthStateChanged(auth , currentUser =>{
    setUser(currentUser)
    console.log("Current User" , currentUser)
  })
  return () => unsubcribe();
  },[])

    const authInfo = {
        user,
        creteUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;