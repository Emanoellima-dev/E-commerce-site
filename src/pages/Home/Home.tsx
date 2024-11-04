import { useEffect, useState } from 'react';
import axios from 'axios'
import ProductItem from '../../components/ProductItem/ProductItem'

import './Home.css'

export interface Product {
  id: number,
  title: string,
  price: number,
  rate: number,
  count: number,
}

export default function Home(){
 const [products, setProducts] = useState<Product[]>([]);
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  const fetchProducts = async () => {
    try {
	const response = await axios.get('https://fakestoreapi.com/products');

         setProducts(response.data);
      } catch (error) {
	 console.error('Erro ao buscar produtos:', error);
      }finally {
        setLoading(false)
      }
    };

   fetchProducts();
  }, []);


 if(loading){
    return (
     <div className="loading-container"></div>
    )
 }

  return (
    <div className="container">
      <h1 className="h1-title">Todos os Produtos</h1>
       
      <div className="products">
        {products && products.map(product => 
	  <ProductItem products={product} key={product.id}/>
	)}
     </div>

     <div>
      <footer>favicon by "Reda" on "freeicons.io"</footer>
     </div>
    </div>
  )
}
