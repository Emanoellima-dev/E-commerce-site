import { useNavigate } from 'react-router-dom'

import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './ProductItem.css'

export default function ProductItem({ products }){
 const navigate = useNavigate();

 return (
   <div className="products-container" key={products.id}>

     <img src={products.image} alt={products.title} />
     <h2 className="product-title">{products.title}</h2>

     <div className="product-informations">
       <p>Preço: {products.price}</p>
          
       <div className="product-rate">
         <p><FaStar/>  {products.rating.rate}</p>
	 <p><FaUser/>  {products.rating.count}</p>

       </div>
     </div>

     <button className="button" onClick={ () => navigate(`/Detalhes/${products.id}`) }>Detalhes</button>
   </div>
 )
}
