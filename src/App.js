import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import All_Items from "./components/pages/AllItems";
import AddItem from "./components/Items/AddItem";
import Item from "./components/Items/Item";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item" component={All_Items} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/addItem" component={AddItem} />
          <Route exact path="/item/:id" component={Item} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
