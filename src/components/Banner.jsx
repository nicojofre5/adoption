import React from "react";
import Bannerimg from "../img/banneeradopta.jpg";
function Banner(){
    return(
        <div className="cont-img-banner">
            <img src={Bannerimg} alt="Imagen banner" />
        </div>
    );
}

export default Banner;