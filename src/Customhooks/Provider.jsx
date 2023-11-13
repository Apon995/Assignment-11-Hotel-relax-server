
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import useFetch from './useFetch';


export const authContaxt = createContext(null)


function Provider({ children }) {

    const axiosFetch = useFetch();

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
        setLoading(true);
        signOut(auth)
            .then(() => {
                axiosFetch.post('/jwtTokenClear', {}, { withCredentials: true })
                    .then((res) => { console.log(res?.data) })
                    .catch(error => { console.log(error) })

            })
            .catch(error => console.log(error));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const loggeduser = { email: currentUser?.email || user?.email };
            setUser(currentUser);
            setLoading(false)

            if (currentUser) {

                axiosFetch.post('/jwtToken', loggeduser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => console.log(error))


            }
            else {
                setUser(null);
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