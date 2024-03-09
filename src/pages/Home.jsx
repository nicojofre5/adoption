import React from "react";
import BannerInicial from '../components/Banner';
import Productos from "../components/Productos";
function Home(){
    return(
       <>
        <BannerInicial />
        <Productos />
       </>
       
    );
}

export default Home;