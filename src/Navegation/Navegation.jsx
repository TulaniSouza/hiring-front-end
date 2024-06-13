import React from "react"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "../Home/Home.jsx"
import Contact from "../Contact/Contact.jsx"
import * as S from './Style.jsx'
import Logo from "../assets/Logo.png"

function Navegation(){
    
    return(
        <BrowserRouter> 
            <S.Nav>
                <img src={Logo} alt="logo da loja"/>
                <S.List>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/Contact">Contact</Link></li>        
                </S.List>
            </S.Nav>
        
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                
            </Routes>


        </BrowserRouter>

    )
}
export default Navegation