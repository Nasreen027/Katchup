import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const FirebaseContext = createContext(null);
const auth = getAuth();

export const useFirebase = useContext(FirebaseContext);

const signupUserWithEmailAndPassword =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>{props.children}</FirebaseContext.Provider>;
};
const firebaseConfig = {
  apiKey: "AIzaSyCyU20JzC6W_8qHRdQtM5AkUZFVfEY2N5c",
  authDomain: "aurora-dfb2a.firebaseapp.com",
  projectId: "aurora-dfb2a",
  storageBucket: "aurora-dfb2a.appspot.com",
  messagingSenderId: "696677511646",
  appId: "1:696677511646:web:f48301b1f604ccc3c56d4f",
};

const app = initializeApp(firebaseConfig);
