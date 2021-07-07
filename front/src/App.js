import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Plans from './components/Plans/Plans';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={NavBar}/>
      <Route path='/asociate' component={Plans}/>
      <Route path='/detalle' component={ProductDetail}/>
    </React.Fragment>
  );
}
 
export default App;
