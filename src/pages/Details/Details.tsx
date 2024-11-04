import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './Details.css'

export interface ProductDetails {
  id: number,
  title: string,
  description: string,
  price: number,
}

export default function Details(){
 const [product, setProduct] = useState<ProductDetails>([]);
 const [loading, setLoading] = useState(true)
 const { id } = useParams();

 const navigate = useNavigate();

 useEffect(() => {
  async function getProduct(){
   try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      
      setProduct(response.data)
     }catch(error){
       alert("erro ao obter os Produtos")
     } finally {
       setLoading(false)
     }
   }

   getProduct();
 }, [])

 async function addProduct(id){
   try {
    const response = await axios.post("https://api-9zqj.onrender.com/adicionar", {
    
     id,
    })

     alert("O Produto Foi Adicionado No Carrinho!")
   }catch(error){
     alert("Erro Ao adicionar o Produto no Carrinho")
   }
  }

  if(loading){
   return (
    <div className="loading-container"></div>
   )
  }

  return (
   <>
   { product && (
     <div className="product-container">
    <div>
        <img src={product.image} alt={product.title} className="img"/>
      </div>

      <div>
        <h1 className="description-title">{product.title}</h1>
	<p className="Description">{product.description}</p>
      </div>

      <div className="product-rate">
       <p className="product-price">Preço {product.price}</p>
      </div>

    </div>
     )}

     <div className="button-area">
        <button className="Button" onClick={() => addProduct(product.id)}>Adicionar Ao Carrinho</button>

        <button className="Button" onClick={ () => navigate("/carrinho") }>Ir Para o Carrinho</button>
      </div>
    </>
  )
}
