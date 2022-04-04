
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greeting={"SneakersShop en Construcción"} />
        
       
        
      </header>
    </div>
  );
}

export default App;
