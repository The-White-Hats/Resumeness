import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD-m1vrM2vSZPtYsrwu2xouPRBoxkS3AWo",
  authDomain: "resumeness-e562e.firebaseapp.com",
  projectId: "resumeness-e562e",
  storageBucket: "resumeness-e562e.appspot.com",
  messagingSenderId: "146298282390",
  appId: "1:146298282390:web:bb9348f9984b139e7f3db7",
  measurementId: "G-V3J72YTX6D"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);