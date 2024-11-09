import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Cart.css'

export interface Product {
  id: number,
  image: string,
  title: string,
  price: number,
}

export default function Cart(){
 const [products, setProducts] = useState<Product[]>();
 const navigate = useNavigate();
 const [loading, setLoading] = useState(true)
 const [update, setUpdate] = useState(false)

async function removeProduct(id: number){
   try {
    await axios.delete(`https://api-mongodb-wi6f.onrender.com/deleteProducts/${id}`)

     alert("O Produto Foi Removido!")
     setUpdate(!update)
   }catch (error: any) {
      const errorMessage = error.response?.data?.message || "Erro ao remover o produto";
      alert(errorMessage);
    }
 }

 useEffect(() => {
   async function buscarProdutos(){
     try {
       const response = await axios.get("https://api-mongodb-wi6f.onrender.com/cart")

       setProducts(response.data);
     }catch(error){
       alert("erro ao buscar os produtos")
     }finally {
       setLoading(false)
     }
   }

   buscarProdutos();
 }, [update])

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
