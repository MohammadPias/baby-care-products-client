import { useEffect, useState } from 'react';
import initializeFirebase from "../Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [loding, setLoding] = useState(true);

    const auth = getAuth();
    const googoleProvider = new GoogleAuthProvider();

    // Google Sign in setup
    const handleGoogleSignin = (history, destination) => {
        setLoding(true);
        signInWithPopup(auth, googoleProvider)
            .then(result => {
                setUser(result.user);
                const user = { displayName: result.user.displayName, email: result.user.email };
                saveUser(user, 'PUT')
                history.push(destination);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoding(false))
    };

    // Email Password signup setup
    const handleSignup = (email, password, name, history) => {
        setLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(result => {

                }).catch((error) => {

                });
                const user = { displayName: name, email: email }
                saveUser(user, 'POST');
                history.push('/login');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoding(false))
    };
    // Email Password login setup
    const handleLogin = (email, password, history, destination) => {
        setLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoding(false))

    }
    // Observe On Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setLoding(true);
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoding(false);
        })
        return () => unsubscribe;
    }, [])
    // Sign out setup
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    };

    // Save user information to Database
    const saveUser = (user, method) => {
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(result => {

            })
    }

    return {
        user,
        error,
        loding,
        handleLogin,
        handleGoogleSignin,
        handleSignup,
        handleSignOut
    };

}
export default useFirebase;