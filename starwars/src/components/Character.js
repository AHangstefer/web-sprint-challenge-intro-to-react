// Write your Character component here
import React from "react";
import styled, {css} from "styled-components";
import "../index.css";
//import Axios from "axios";

export const H2 =styled.h2`
  font-family: 'Orbitron', sans-serif;
`;

export const DIV1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  white-space: nowrap;
  opacity: 80%;
  font-size: 1.2rem;
  padding: 1rem;
  border: .2rem solid black;
  

  &:hover {
    opacity: 100%;
    color: black;
    font-weight: bolder;
    font-size: 1.3rem;
    border: inherit;
  }
`;



const Character = ({name, birthYear, homeworld, films, eyeColor, gender}) => {


    return(
        <DIV1 className = "aPerson">
            <H2>{name}</H2>
             <p>Birth Year:{birthYear}</p>
             <p>Eye Color: {eyeColor}</p>
             <p>Gender: {gender}</p>
             {/*<p>Home World:{homeworld}</p>
             <p>Films: {films}</p>*/}
        </DIV1> 
    );
    };       

 export default Character   
