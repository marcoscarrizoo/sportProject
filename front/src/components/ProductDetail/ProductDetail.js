import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail } from "../../redux/actions/productsActions";
import { addToCart } from "../../redux/actions/cartActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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

// export default function ProductDetail() {
//   const classes = useStyles();
//   const detail = useSelector(store => store.products.productDetail)
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(getProductDetail(id));
//   }, [dispatch, id]);

//   console.log('detail', detail)

//   //Transformar string a minuscula y luego la primera a mayuscula.Knut
//   function capitalize(word) {
//     word = word.toLowerCase();
//     return word[0].toUpperCase() + word.slice(1);
//   }

//   return (
//     <Card className={classes.root}>
//       {
//         detail &&
//         <div>
//           <CardHeader
//             title={detail.name}
//           />
//           <CardMedia
//             className={classes.media}
//             image={detail.images}
//             title="Paella dish"
//           />
//           <CardContent>
//             <Typography variant="body2" component="p">
//               Descripcion:  {detail.description} <hr></hr>
//             </Typography>
//             <Typography variant="h5" component="p">
//               Precio: ${detail.price}
//             </Typography>
//             <Typography variant="body2" component="p">
//               Disponible: {detail.stock}
//             </Typography>
//             <Typography variant="body2" component="p">
//               Categoria: {detail.categories.length ?
//               detail.categories.map(category => <li>{capitalize(category.name)}</li>)
//               :
//               <span>Sin categoria asociada</span>
//               }
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <Button className={classes.buyButton} variant='contained' color='secondary'>agregar al carrito</Button>
//           </CardActions>
//         </div>
//       }
//     </Card>

//   );
// }

export default function ProductDetail() {
  const classes = useStyles();
  const detail = useSelector((store) => store.products.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [image, setImage] = React.useState(
    detail ? detail.images[0] : undefined
  );
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);



  function changeImg(e) {
    setImage(e.target.src);
  }
  //Transformar string a minuscula y luego la primera a mayuscula.Knut
  function capitalize(word) {
    word = word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
  }
  if (!detail) {
    return (
      <div class="lds-spinner">
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
      <div>
        <div className="bigone">
          <div className="firstblock">
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
            <hr className="hr"></hr>
            <div className="thirdblock">
              <h2>{detail.name}</h2>


  return (
    <Card className={classes.root}>
      {detail && (
        <div>
          <CardHeader title={detail.name} />
          <CardMedia
            className={classes.media}
            image={detail.images}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Descripcion: {detail.description} <hr></hr>
            </Typography>
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
              onClick={() => {
                if (detail) {
                  dispatch(addToCart(detail.id, 1, detail.price));
                }
              }}
            >
              agregar al carrito
            </Button>
          </CardActions>
        </div>
      )}
    </Card>
  );

             // <CardContent>
               // <Typography variant="h5" component="p">
                //  Precio: ${detail.price}
               // </Typography>
               // <Typography variant="body2" component="p">
               //   Disponible: {detail.stock}
               // </Typography>
               // <Typography variant="body2" component="p">
                 // Categoria:{" "}
                 // {detail.categories.length ? (
                 //   detail.categories.map((category) => (
                  //    <li>{capitalize(category.name)}</li>
                    //))
                  //) : (
                   // <span>Sin categoria asociada</span>
                  //)}
                //</Typography>
              //</CardContent>
              //<CardActions disableSpacing>
                //<Button
                 // className={classes.buyButton}
          //        variant="contained"
            //      color="secondary"
              //  >
                //  agregar al carrito
       //         </Button>
        //      </CardActions>
         //   </div>
         // </div>
       // </div>
       // <div>
        //  <p>{detail.description}</p>
        //</div>
      //</div>
    //);
  //}

}
