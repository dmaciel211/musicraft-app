import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
       <Switch>
          <Route exact path="/" >
          <ItemListContainer />
          </Route>
          <Route path="/category/:categoryName"></Route>
          <Route path="/item/:id">
      <ItemDetailContainer/>
          </Route>
          <Route path="*">
            <h1>No se ha encontrado la página</h1>
          </Route>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
