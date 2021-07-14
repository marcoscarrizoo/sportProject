import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import generatorStore from './redux/store'
import dotenv from "dotenv";
dotenv.config();



//Esta constante es para tomar la URL para deploy o en su defecto para desarrollo.
export const BASE_URL_API = process.env.REACT_APP_API || "http://localhost:3001";

let store = generatorStore()

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

