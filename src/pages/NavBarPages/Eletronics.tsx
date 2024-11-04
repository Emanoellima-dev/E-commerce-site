import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './style.css'

export interface Product {
  id: number,
  title: string,
  price: number,
  rate: number,
  count: number,
}

export default function Eletronics(){
 const [products, setProducts] = useState<Product>([]);
 const navigate = useNavigate();

 useEffect(() => {
   async function fetchMensClothing(){
   try{
     const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
     setProducts(response.data)
   }catch(error){
     alert("erro ao obter os produtos")
   }
 }

   fetchMensClothing();
 }, [])

  return (
   <>
    <h1 className="Title">Eletrônicos</h1>
    <div className="area">
     {products && products.map((product) => (
      <div className="products-container" key={product.id}>
        <img src={product.image} alt={product.title}/>
        <h2 className="product-title">{product.title}</h2>

    <div className="product-informations">
       <p>Preço: {product.price}</p>

       <div className="product-rate">
         <p><FaStar/>  {product.rating.rate}</p>
         <p><FaUser/>  {product.rating.count}</p>

       </div>
     </div>
     <button className="button" onClick={ () => navigate(`/Detalhes/${product.id}`) }>Comprar</button>
      </div>
     ))}
    </div>
   </>
  )
}
