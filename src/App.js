
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/ItemDetail/Form/Form';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Link to="/form" > Form </Link>
        <Routes>
          <Route path='/' element= {<h1>HOME</h1>}/>
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          <Route path='/list' element={<ItemListContainer greeting={"SneakersShop en Construcción"} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/marca/:marcaId' element={<ItemListContainer/>}/>
          <Route path ="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
