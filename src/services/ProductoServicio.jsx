import firebase from "../Config/firebase";

export async function getAllProductos(){
    return await firebase.firestore().collection("productos").get();
}
export async function getById(id){
    return await firebase.firestore().doc(`productos/${id}`).get();
}
export async function create(payload){
    return await firebase.firestore().collection("productos").add(payload);
}
export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).update(payload);
}

export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`).delete();
}