import React from "react"
import * as S from './style.jsx'

function Contact(){
    return(
        <S.Container>
            <form id="form" className="topBefore">
                <input id="name" type="text" placeholder="NOME"></input>
                <input id="email" type="text" placeholder="E-MAIL"></input>
                <textarea id="message" type="text" placeholder="MENSSAGEM"></textarea>
                <input id="submit" type="submit" value="Enviar"></input>
            </form>
        </S.Container>
    )
    }
export default Contact