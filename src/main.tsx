import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'



import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import MensClothing from './pages/NavBarPages/MensClothing'
import WomensClothing from './pages/NavBarPages/WomensClothing'
import Eletronics from './pages/NavBarPages/Eletronics'
import Jewelry from './pages/NavBarPages/Jewelry'
import Notifications from './pages/Notifications/Notifications'
import Details from './pages/Details/Details'
import Checkout from './pages/Checkout/Checkout'



import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
     <Routes>
	<Route element={<App/>}>
	  <Route path="/" element={<Home/>}/>
	  <Route path="/carrinho" element={<Cart/>}/>
	  <Route path="/Roupas Masculinas" element={<MensClothing/>}/>
	  <Route path="/Roupas Femininas" element={<WomensClothing/>}/>
	  <Route path="/Eletronicos" element={<Eletronics/>}/>
	  <Route path="/Joias" element={<Jewelry/>}/>
	  <Route path="/Notificações" element={<Notifications/>}/>
	  <Route path="/Detalhes/:id" element={<Details/>} />
	  <Route path="/pagamento" element={<Checkout/>}/>
	</Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>
)
