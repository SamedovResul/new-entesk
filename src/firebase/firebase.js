import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCejJQhkN2JGs2SkWhTNPfQ00xegFnQMM4",
  authDomain: "entesk-project.firebaseapp.com",
  projectId: "entesk-project",
  storageBucket: "entesk-project.appspot.com",
  messagingSenderId: "164966034543",
  appId: "1:164966034543:web:4790fcfd85eaa3cb4bb19a",
  measurementId: "G-08QNY80L2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// console.log(app)

// export default firebase