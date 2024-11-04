import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home' 

const App = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
   </>
  );
};

export default App;
