import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";

type ContextProps = {
  user: any | null;
  logIn: any;
  signUp: any;
  logOut: any;
  sendPassword: any;
  googleSignIn: any;
};

export const userAuthContext = createContext<Partial<ContextProps>>({});

export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = useState({} as any);

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function sendPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, sendPassword, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
