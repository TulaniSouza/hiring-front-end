import styled from 'styled-components'


export const HomeContainer=styled.section`
display: flex;
flex-wrap: wrap;
gap: 5px;
justify-content: center;
margin: 50px 50px 50px 50px;
width: 90%; 

@media (min-width:100px) and (max-width:505px){
margin:20px 10px 10px 20px;
}
`

export const IconContainer=styled.div`
display: flex;
align-items: center;
width: 90%;
height: 30%;
text-align: center;
justify-content: space-evenly;

@media (min-width:100px) and (max-width:505px){
font-size:1.2em;
flex-direction: column;
text-align:justify;
width:95%;
}


img{
    width: 10vw;
    flex-direction: column;

    @media (min-width:100px) and (max-width:505px){
    object-fit: contain;
    height: 50vh;
    width:70vw;
}
}
h4{
    font-weight: 300;
    margin:10px 10px 10px 10px; 
}

p{
    font-size: 1em;
}

`
export const StyledButton=styled.button`
width: 100%;
height: 100%;
display:flex;
`
export const StyledMain=styled.section`
width: 10%;
height: 10%;
margin-top: 10%;
`

export const Button=styled.button`
width: 100%;
height: 100%;
`
