import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getProductDetail } from '../../redux/actions/productsActions';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: '100px',
    marginLeft: '38%',
    boxShadow: '0  0 20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  buyButton: {
    width: '100%'
  }
}));

export default function ProductDetail() {
  const classes = useStyles();
  const detail = useSelector(store => store.products.productDetail)
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  console.log(detail)

  return (

    <Card className={classes.root}>

      {
        detail &&
        <div>

          <CardHeader

            title={detail.name}

          />
          <CardMedia
            className={classes.media}
            image={detail.images}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Descripcion:  {detail.description} <hr></hr>
            </Typography>
            <Typography variant="h5" component="p">
              Precio: ${detail.price}
            </Typography>
            <Typography variant="body2" component="p">
              Disponible: {detail.stock}
            </Typography>
            <Typography variant="body2" component="p">
              Categoria: no disponible
            </Typography>
          </CardContent>
          <CardActions disableSpacing>

            <Button className={classes.buyButton} variant='contained' color='secondary'>agregar al carrito</Button>


          </CardActions>
        </div>
      }
    </Card>

  );
}