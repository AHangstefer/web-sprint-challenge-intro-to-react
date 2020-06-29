// Write your Character component here
import React from "react";
import styled, {css} from "styled-components";
import "../index.css";

export const H2 =styled.h2`
font-family: 'Orbitron', sans-serif;
`;



const Character = ({name, birthYear, homeworld, films, eyeColor, gender}) => {

    return(
        <div className = "aPerson">
         <H2>{name}</H2>
         <p>Birth Year:{birthYear}</p>
         <p>Eye Color: {eyeColor}</p>
         <p>Gender: {gender}</p>
         {/*<p>Home World:{homeworld}</p>
         <p>Films: {films}</p>*/}
        </div> 
    );
    };       

 export default Character   
