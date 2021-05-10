import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyClnmlH3nfr-la8oVVCxdhrnMPOoJZbbE0",
    authDomain: "whatsapp-clone-mern-bcada.firebaseapp.com",
    projectId: "whatsapp-clone-mern-bcada",
    storageBucket: "whatsapp-clone-mern-bcada.appspot.com",
    messagingSenderId: "964915110639",
    appId: "1:964915110639:web:efec0d1b755e59c3b8f11a"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()

  const auth=firebase.auth()

  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db