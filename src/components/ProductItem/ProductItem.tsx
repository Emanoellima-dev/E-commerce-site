import { useNavigate } from 'react-router-dom'

import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './ProductItem.css'

export interface Product {
  id: number,
  title: string,
  image: string,
  price: number,
  rating: {
   rate: number,
   count: number,
  },
}


interface ProductItemProps {
  products: Product[];
}


export default function ProductItem({ products }: ProductItemProps ){
 const navigate = useNavigate();

 return (
  <>
   { products && products.map((product) => (
 
  <div className="products-container" key={product.id}>

     <img src={product.image} alt={product.title} />
     <h2 className="product-title">{product.title}</h2>

     <div className="product-informations">
       <p>Preço: {product.price}</p>
          
       <div className="product-rate">
         <p><FaStar/>  {product.rating.rate}</p>
	 <p><FaUser/>  {product.rating.count}</p>

       </div>
     </div>

     <button className="button" onClick={ () => navigate(`/Detalhes/${product.id}`) }>Detalhes</button>
   </div>
  ))}
  </>
 )
}
