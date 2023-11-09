
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const authContaxt = createContext(null)


function Provider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const RegisterEmailorPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginEmailorPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })


        return () => {
            unsubscribe();
        }
    }, [])



















    const dataobj = {

        user,
        loading,
        RegisterEmailorPass,
        LoginEmailorPass,
        Logout,
        GoogleLogin


    }
    return (
        <authContaxt.Provider value={dataobj}>
            {children}
        </authContaxt.Provider>
    )
}

export default Provider