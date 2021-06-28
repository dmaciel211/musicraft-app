
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar>
        
      </NavBar>
      <ItemListContainer greeting= {"CONTADOR"}></ItemListContainer>
    </div>
  );
}

export default App;
