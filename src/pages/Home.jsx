import React from "react";
import BannerInicial from '../components/Banner';
import Productos from "../components/Productos";
import firebase from "../Config/firebase";
function Home(){
    console.log("Esto es firebase",firebase);
    return(
  
       <>
        <BannerInicial />
        <Productos />
       </>
       
    );
}

export default Home;