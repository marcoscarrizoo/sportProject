import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themeconfig";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Plans from "./components/Plans/Plans";
import Catalogo from "./components/Catalogo/Catalogo";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { products } from "./seeds";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Route path="/" component={NavBar} />
        <Route path="/asociate" component={Plans} />
        <Route
          path="/productos"
          render={() => <Catalogo products={products} />}
        />
        <Route path="/producto/:id" component={ProductDetail} />
        <Route path="/admin/createproduct" component={CreateProduct} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
