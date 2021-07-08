import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Plans from './components/Plans/Plans';
import Catalogo from './components/Catalogo/Catalogo';
import {products} from './seeds'
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={NavBar}/>
      <Route path='/asociate' component={Plans}/>
      <Route path='/productos' render={() => <Catalogo products={products}/>}/>
      <Route path='/producto/:id' component={ProductDetail}/>
    </React.Fragment>
  );
}

export default App;
