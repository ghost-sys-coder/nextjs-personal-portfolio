import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

import { firebaseConfigDetails } from "./config";


const firebaseConfig = {
  apiKey: firebaseConfigDetails.apiKey,
  authDomain: firebaseConfigDetails.authDomain,
  databaseURL: firebaseConfigDetails.databaseUrl,
  projectId: "portfolio-ee346",
  storageBucket: firebaseConfigDetails.storageBucket,
  messagingSenderId: firebaseConfigDetails.messageSenderID,
  appId: firebaseConfigDetails.appID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);