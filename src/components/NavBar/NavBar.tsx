import { useNavigate } from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import './NavBar.css'

export default function NavBar(){
 const navigate = useNavigate();

  return (
     <nav className="navbar-container">
       <h1 className="title">E-Commerce</h1>

       <div className="button-container">
         <button onClick={ () => navigate("/Roupas Masculinas") }>Roupas Masculinas</button>
	 <button onClick={ () => navigate("/Roupas Femininas") }>Roupas Femininas</button>
	 <button onClick={ () => navigate("/Eletronicos") }>Eletrônicos</button>
	 <button onClick={ () => navigate("/Joias") }>Jóias</button>
       </div>

       <div className="content">
        <button className="button" onClick={ () => navigate("/Notificações") }>
	<span className="icon">
          <IoMdNotifications/>
	</span>
        </button>

        <button onClick={ () => navigate("/carrinho") } className="button">
	<span className="icon">
	  <FaShoppingCart/>
	</span>
	</button>
      </div>
     </nav>
  )
}
