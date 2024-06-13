import React, {useState} from "react";
import * as S from "./Style.jsx"


function Contador(){
const [number,setNumber]= useState(0)
function Add(){
    if(number <=100){
        setNumber(number+1)
    }
}
function Sub(){
    if(number>0){
        setNumber(number-1)
    }
}
function Clean(){
    if(number>=0){
        setNumber(0)
    }
    
}
    return(
        <S.StyledMain>
            <S.StyledButton>
                <h2>{number}</h2>
                <S.Button onClick={Add}>+</S.Button>
                <S.Button onClick={Sub}>-</S.Button>
                <S.Button onClick={Clean}>C</S.Button>
            </S.StyledButton>
        </S.StyledMain>    
    )
}
export default Contador