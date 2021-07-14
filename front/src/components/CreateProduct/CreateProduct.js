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
import { editProduct, postProduct } from "../../redux/actions/adminActions";
import { getCategories, getProducts } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
}));

export default function CreateProduct({edit}) {

  let history = useHistory()
  const {id} = useParams()

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

  if(edit) setProduct({
    ...edit
  })

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChangeCategory = (e) => {


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

  const handleSubmit = async (e) => {
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
    
    if( id ) {
      let newinfo = info[0] 

      dispatch(editProduct(newinfo, id));

      await Swal.fire({
        text: "Producto editado exitosamente",
        icon: "success",
        width: "20rem",
        timer: "2000",
        showConfirmButton: false,
      });

      history.push("/admin");
      
    } else {
      dispatch(postProduct(info));
      
      setProduct({
        ...product,
        name: "",
        description: "",
        images: "",
        price: "",
        stock: "",
        categories: [],
      });
      await Swal.fire({
        text: "Producto creado exitosamente",
        icon: "success",
        width: "20rem",
        timer: "3000",
        showConfirmButton: false,
      });
  
    }
    
    dispatch(getProducts())
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
          value={product.name}
        />
        <TextField
          required
          id="description"
          label="Descripcion"
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
          value={product.description}

        />
        <TextField
          required
          id="images"
          label="Imagenes"
          type="url"
          defaultValue=""
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
          value={product.images}

        />

        <TextField
          id="price"
          label="Precio"
          type="number"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="outlined"
          onChange={(e) => handleChangeProduct(e)}
          value={product.price}

        />
        <TextField
          id="stock"
          label="Stock"
          type="number"
          onChange={(e) => handleChangeProduct(e)}
          value={product.stock}

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
