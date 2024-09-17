import { initializeApp } from "firebase/app";
import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
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

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [token, setToken] = useState(null);

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = async() => {
    try{
      const result = await signInWithPopup(auth,googleProvider);
      const userToken = result.user.refreshToken;
      setToken(userToken);
      console.log(result.user.refreshToken,'token');
    }catch{
      console.log('error');
    }
    // return signInWithPopup(auth, googleProvider)
    //   .then((result) => {
    //     setToken(result.user.accessToken);
    //     console.log(result.user.accessToken, "token");
    //     return result.user.accessToken;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     throw err;
    //   });
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
