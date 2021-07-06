import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={NavBar}/>
    </React.Fragment>
  );
}
 
export default App;
