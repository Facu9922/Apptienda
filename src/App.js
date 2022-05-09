
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/ItemDetail/Form/Form';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

import { CartContextProvider } from "./context/CartContext"
import Cart from './Cart/Cart';
import Home from './Home/Home';



function App() {
   
  return (
    <div className="App">
      
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/list' element={<ItemListContainer greeting={"SneakersShop en Construcción"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer  />}/>
            <Route path='/marca/:marcaId' element={<ItemListContainer/>}/>
            <Route path ="/form" element={<Form/>}/>
            <Route path='/cart' element={<Cart />} />
            
          </Routes>
        </BrowserRouter>
        </CartContextProvider>  
      {/* </Context.Provider> */}
      
    </div>
  );
}

export default App;
