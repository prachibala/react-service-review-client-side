import React from "react";
import app from "../firebase.config";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { createContext } from "react";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // CREATE-USER
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // UPDATE USER
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };
    // SIGNIN
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Google Signin
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const googleSignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // LOgOUT
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignin,
        updateUser,
        loading,
        logOut,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;
