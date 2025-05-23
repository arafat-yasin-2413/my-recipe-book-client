import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    console.log('loading status : ', loading);
    console.log('user: ', user);





    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }


    const logOutUser = ()=>{
        return signOut(auth)
    }

    



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])



    const userInfo = {
        user, 
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser, 
        googleLogin,
        logOutUser,
        updateUserProfile,
        
        
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;