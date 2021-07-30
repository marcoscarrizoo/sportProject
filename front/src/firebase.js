import firebase from "firebase/app"; //importamos firebase (hacemos npm install firebase )
import "firebase/auth"; //esto nos va a servir para hacer la autenticacion
import "firebase/firestore"; //firestore es lo que nos ofrece una base de datos en la nube
import "firebase/storage";

//esta informacion la sacamos de la web cuando creamos proyecto, lo encontramos en
//configuracion del proyecto y se llama CONFIGURACION DEL SDK
var firebaseConfig = {
  apiKey: "AIzaSyBAjB7JUJkHdTJZDtv2Ot713ZG7dT0gcOw",
  authDomain: "sportsapp-bbdfb.firebaseapp.com",
  projectId: "sportsapp-bbdfb",
  storageBucket: "sportsapp-bbdfb.appspot.com",
  messagingSenderId: "853642120596",
  appId: "1:853642120596:web:7bdcdfebd349d6e1a35381",
};
// inicializamos Firebase
firebase.initializeApp(firebaseConfig);
//ejecutamos la funcion auth es una variable para despues poder utilizar luego
let auth = firebase.auth();
let storage = firebase.storage();

//exportamos auth para poder utilizarlo en otros archivos y componentes

export { auth, storage };
export default firebase;

//loggearse con email y password
export function loginUser() {
  auth.signInWithEmailAndPassword();
}

//iniciar sesion con google
export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider(); //el provider seria la red social
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}

//cerrar sesion con google
