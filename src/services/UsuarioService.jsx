import firebase from "../Config/firebase";

export async function create(payload){
   const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password);
   console.log("Create ID del usuario:", responseUser.user.uid);
   const document = await firebase.firestore().collection("usuarios")
   .add({
    name:payload.nombre,
    lastname:payload.apellido,
    userId:responseUser.user.uid
   })
   console.log("Entró a firebase",document)
   

   return document
}

export async function login(email,password){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email,password);
    return responseUser.user.uid;
}