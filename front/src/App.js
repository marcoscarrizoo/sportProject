import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Plans from "./components/Plans/Plans";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route path="/asociate" component={Plans} />
      <Route path="/card" component={ProductCard} />
    </React.Fragment>
  );
}

export default App;
