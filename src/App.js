
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greeting={"SneakersShop en Construcción"} />
      <ItemDetailContainer id={3}/>
      <ItemDetailContainer id={4}/>
      
       
        
      </header>
    </div>
  );
}

export default App;
