import { useNavigate } from 'react-router-dom'

import './Checkout.css'

export default function Checkout(){
  const navigate = useNavigate();

 function redirect(e){
   e.preventDefault();
    alert("Pagamento Feito com Sucesso! Aproveite! Navegue por mais produtos!!")
    navigate("/")
  }

 return (
    <div className="checkout-container">
      <h1 className="checkout-title">Preencha Este Formulário</h1>

    <form className="form" onSubmit={redirect}>
      <p className="label">Digite Seu Nome</p>
      <input type="text" placeholder="nome" required />
      <p className="label" >Digite Seu Endereço:</p>
      <input type="text" placeholder="seu endereço" required/>
      <p className="label">Digite Seu Email:</p>
      <input type="text" placeholder="primeiro nome" required/>

      <p className="label">Digite o Preço do Produto:</p>
      <input type="number" placeholder="preco de produto" required/>

      <button className="checkout-button" type="submit">Fazer o Pagamento</button>
   </form>
    </div>
  )
}
