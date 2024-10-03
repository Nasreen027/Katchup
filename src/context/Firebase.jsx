import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyU20JzC6W_8qHRdQtM5AkUZFVfEY2N5c",
  authDomain: "aurora-dfb2a.firebaseapp.com",
  projectId: "aurora-dfb2a",
  storageBucket: "aurora-dfb2a.appspot.com",
  messagingSenderId: "696677511646",
  appId: "1:696677511646:web:f48301b1f604ccc3c56d4f",
};

export const app = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = (props) => {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userToken = await user.getIdToken();
        setToken(userToken);
      } else {
        setToken(null); // User is signed out
      }
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userToken = await result.user.getIdToken();
      setToken(userToken);
      console.log(userToken, "token");
    } catch (error) {
      console.log("error signing in with Google:", error);
    }
  };
  
  return (
    <FirebaseContext.Provider
    value={{
      signupUserWithEmailAndPassword,
      signInUserWithEmailAndPassword,
      signInWithGoogle,
      token,
    }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
  
export const useFirebase = () => useContext(FirebaseContext);