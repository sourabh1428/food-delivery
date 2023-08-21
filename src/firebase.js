import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAmnE3Kst-K9jRlp_bv2gvXW8zX2wPj-Zs",
    authDomain: "food-del-prod.firebaseapp.com",
    projectId: "food-del-prod",
    storageBucket: "food-del-prod.appspot.com",
    messagingSenderId: "775353557655",
    appId: "1:775353557655:web:0e0df15977bc805ae63fd2",
    measurementId: "G-NDFLMVHCVP"
  };


const app=initializeApp(firebaseConfig);
const auth=getAuth();

export { app, auth};