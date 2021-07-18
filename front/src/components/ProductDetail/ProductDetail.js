import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail, resetProductDetail } from "../../redux/actions/productsActions";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "100px",
    marginLeft: "38%",
    boxShadow: "0  0 20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  buyButton: {
    width: "100%",
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
  const detail = useSelector((store) => store.products.productDetail);    
  const dispatch = useDispatch();
  const { id } = useParams();  
  const [image, setImage] = React.useState(null);


  useEffect(() => {
    dispatch(getProductDetail(id));
    if(detail){
    setImage(detail.images[0])}
    return ()=>dispatch(resetProductDetail())
  }, [dispatch, id]);

  

  function changeImg(e) {
    setImage(e.target.src);
  }
  //Transformar string a minuscula y luego la primera a mayuscula.Knut
  function capitalize(word) {
    word = word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
  }
  if (detail=== null) {
    return (
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="div">
        <div className="bigone">
          
            <div className="miniblock">
              {detail ? (
                detail.images.map((e) => (
                  <img
                    src={e}
                    alt={e}
                    className="miniatureImages"
                    onClick={(e) => changeImg(e)}
                  />
                ))
              ) : (
                <span>imagen no encontrada</span>
              )}
            </div>
            <div className="secondblock">
              <img src={image} alt={image} className="centerimage" />
            </div>
           
            <div className="thirdblock">
              <h2>{detail.name}</h2>

              <CardContent>
                <Typography variant="h5" component="p">
                  Precio: ${detail.price}
                </Typography>
                <Typography variant="body2" component="p">
                  Disponible: {detail.stock}
                </Typography>
                <Typography variant="body2" component="p">
                  Categoria:{" "}
                  {detail.categories.length ? (
                    detail.categories.map((category) => (
                      <li>{capitalize(category.name)}</li>
                    ))
                  ) : (
                    <span>Sin categoria asociada</span>
                  )}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  className={classes.buyButton}
                  variant="contained"
                  color="secondary"
                >
                  agregar al carrito
                </Button>
              </CardActions>
            </div>
          
        </div>
        <div className="detail">
          <p>{detail.description}</p>
        </div>
      </div>
    );
  }
}
