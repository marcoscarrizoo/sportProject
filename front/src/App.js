
import React from 'react'
import {Route} from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themeconfig";
import NavBar from './components/NavBar/NavBar';
import Plans from './components/Plans/Plans';
import Catalogo from './components/Catalogo/Catalogo';
//import CreateProduct from "./components/CreateProduct/CreateProduct";
import ProductDetail from './components/ProductDetail/ProductDetail';
//import CreateCategory from './components/Admin/CreateCategory';
import Admin from './components/Admin/Admin';







function App() {
  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>
        <Route path="/" component={NavBar} />
        <Route path="/asociate" component={Plans} />
        <Route path="/productos" component={Catalogo} />
        <Route path="/producto/:id" component={ProductDetail} />
        <Route path="/admin" component={Admin} />
        
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
