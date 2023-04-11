import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAl6Fb69bFgrHTpWyQW6SholWc9XK8l8Eo",
  authDomain: "quiz-app-cc162.firebaseapp.com",
  projectId: "quiz-app-cc162",
  storageBucket: "quiz-app-cc162.appspot.com",
  messagingSenderId: "438837400791",
  appId: "1:438837400791:web:aa80c4f75afefd39ed8c92"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const FireConfig = {
    auth,
    GoogleProvider,
}