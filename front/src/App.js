import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={NavBar}/>
      <Route path='/asociate' component={Plans}/>
    </React.Fragment>
  );
}
 
export default App;
