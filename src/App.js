import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./views/ItemListContainer/ItemListContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./views/Cart/Cart.js";
import Orders from "./views/Orders/Orders";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/category/:categoryName">
              <ItemListContainer />
            </Route>
            <Route path="/order">
              <Orders/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          
            <Route path="*">
              <h1>No se ha encontrado la página</h1>
            </Route>
              </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
