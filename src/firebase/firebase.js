import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOKbblnqm79i9OwdEVTE9huy5NgNF2ac8",
  authDomain: "react-e-commerce-datos.firebaseapp.com",
  projectId: "react-e-commerce-datos",
  storageBucket: "react-e-commerce-datos.appspot.com",
  messagingSenderId: "931233393846",
  appId: "1:931233393846:web:5196b029e44a5043860a17",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };

export default app;
