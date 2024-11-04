import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar' 

const App = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
   </>
  );
};

export default App;
