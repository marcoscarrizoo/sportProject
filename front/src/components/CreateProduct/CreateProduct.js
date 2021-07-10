import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { postProduct } from "../../redux/actions/adminActions";
import { getCategories } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.products.categories);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    images: [],
    price: "",
    stock: "",
    categories: [],
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChangeCategory = (e) => {
    console.log("e.target.name", e.target.name);
    if (product.categories.includes(e.target.name)) {
      setProduct({
        ...product,
        categories: product.categories.filter(
          (element) => element.name !== e.target.name
        ),
      });
    } else {
      setProduct({
        ...product,
        categories: [
          ...product.categories,
          {
            name: e.target.name,
            image: "",
          },
        ],
      });
    }
  };

  function handleChangeProduct(e) {
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = [
      {
        name: product.name,
        description: product.description,
        images: [product.images],
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
        categories: product.categories,
      },
    ];
    console.log("AQUIIIIIIIIII", info);
    dispatch(postProduct(info));
    setProduct([
      {
        ...product,
        name: " ",
        description: " ",
        images: " ",
        price: null,
        stock: null,
        categories: [],
      },
    ]);
    Swal.fire({
      text: "Producto creado exitosamente",
      icon: "success",
      width: "20rem",
      timer: "3000",
      showConfirmButton: false,
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <TextField
          required
          id="name"
          label="Nombre"
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
        />
        <TextField
          required
          id="description"
          label="Descripcion"
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
        />
        <TextField
          required
          id="images"
          label="Imagenes"
          type="url"
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
        />

        <TextField
          id="price"
          label="Precio"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
        />
        <TextField
          id="stock"
          label="Stock"
          type="number"
          onChange={(e) => handleChangeProduct(e)}
        />
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <p>
            <FormLabel component="legend">Category/ies</FormLabel>
          </p>

          <FormGroup>
            {categories ? (
              categories.map((e) => {
                return (
                  <FormControlLabel
                    key={e.id}
                    control={
                      <Checkbox
                        onChange={(e) => handleChangeCategory(e)}
                        name={e.name}
                      />
                    }
                    label={e.name}
                  />
                );
              })
            ) : (
              <span>No hay categorias existentes</span>
            )}
          </FormGroup>
        </FormControl>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Agregar Producto
      </Button>
    </form>
  );
}
