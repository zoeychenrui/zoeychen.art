import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDes77x7Md3a0yGqPOJ3LswelDi6fs9Uw8",
    authDomain: "art-website-27a1f.firebaseapp.com",
    projectId: "art-website-27a1f",
    storageBucket: "art-website-27a1f.appspot.com",
    messagingSenderId: "913942610150",
    appId: "1:913942610150:web:41b2e47cf18a861571fb27",
    measurementId: "G-7D82VL5JDL"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const storageRef = ref(storage);
    
  export default storage;