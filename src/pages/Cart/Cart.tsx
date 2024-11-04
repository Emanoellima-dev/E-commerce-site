import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Cart.css'

export default function Cart(){
 const [products, setProducts] = useState();
 const navigate = useNavigate();
 const [loading, setLoading] = useState(true)

async function removeProduct(id){
   try {
    const response = await axios.delete("https://api-9zqj.onrender.com/delete", {
    
     data: { id: id }
    })

     alert(response.data.message)
   }catch(error){
     alert(response.data.message)
   }
 }

 useEffect(() => {
   async function buscarProdutos(){
     try {
       const response = await axios.get("https://api-9zqj.onrender.com/cart")

       setProducts(response.data);
     }catch(error){
       alert("erro ao buscar os produtos")
     }finally {
       setLoading(false)
     }
   }

   buscarProdutos();
 }, [removeProduct])

 if(loading){
   return (
    <h1 className="loading">Carregando...</h1>
   )
 }

  return (
   <>
    <h1 className="title-container">Carrinho</h1>
    <div className="Container">
      {products && products.map((product) => (
	<>
        <div className="Content">
         <img src={product.image} alt={product.title} className="Img"/>

	 <div className="buttonArea">
	  <h2 className="Text">{product.title}</h2>
	  <p className="Price">{product.price}</p>

	  <button className="product-button" onClick={ () => navigate("/pagamento") }>Comprar</button>

	  <button className="button-remove" onClick={ () => removeProduct(product.id) }>Remover Do Carrinho</button>
	</div>
	</div>

       </>
      ))}
    </div>
    </>
  )
}
