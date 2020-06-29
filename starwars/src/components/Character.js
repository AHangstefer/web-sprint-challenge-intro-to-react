// Write your Character component here
import React from "react";

const Character = ({name, birthYear, homeworld, films}) => {

    return(
        <div className = aPerson>
         <h2>{name}</h2>
         <p>{birthYear}</p>
         <p>{homeworld}</p>
         <p>{films}</p>
        </div> 
    );
    };       

 export default Character   
