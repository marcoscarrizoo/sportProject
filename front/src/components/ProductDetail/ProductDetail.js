import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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
 
  return (
    <Card className={classes.root}>
      <CardHeader
        
        title="NOMBRE DEL PRODUCTO"
        
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          aca va la description del producto
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          PRICE
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          STOCK
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
       <Button className={classes.buyButton} variant='contained' color='secondary'>agregar al carrito</Button>
        
        
      </CardActions>
      
    </Card>
  );
}