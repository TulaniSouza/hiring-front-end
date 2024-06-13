import React, {useState,useEffect} from "react"
import * as S from './Style.jsx'
import axios from "axios"
import Accountant from "./Accountant.jsx"

function Home(){

  const [products, setProducts]= useState([])
  const api= "https://fakestoreapi.com/products"
  const getApi= ()=>{
  axios.get(api).then((response)=>
  {
    setProducts(response.data) 
    console.log(response.data)
  })
}
  useEffect(() => { 
  getApi()
  },[])

    return(
      <S.HomeContainer>

        {products.map((product, index) => (
          <S.IconContainer key={products}>
            <img src={product.image} alt=""/>
            <h4>R${product.price}</h4>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Accountant/>      
          </S.IconContainer>
        ))}
      </S.HomeContainer>
    )
}
export default Home