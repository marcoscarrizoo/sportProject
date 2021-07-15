import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardHeader,
  Avatar
} from "@material-ui/core";
import BlockIcon from '@material-ui/icons/Block';

const useStyles = makeStyles({
  
  root: {
    maxWidth: 345,
    height: 420,
  },
  button: {
    width: '100%'
  },
  noStock: {
    background: '#e0e0e0',
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: 'gray',
    
  },
});

export default function ProductCard({ name, images, price, categories, stock }) {
  // { name, price, image, categories } props
  const classes = useStyles();



  return (
    <div>
    {stock? 
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt={name}
          height='230'
          image={images}
          title={name}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" >
            {name}
          </Typography>
          <Typography gutterBottom variant="h4" >
            ${price}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {categories}
          </Typography>
          <Button className={classes.button} variant='contained' color='primary'>
          comprar
          </Button>
        </CardContent>
      </CardActionArea>
      </Card>
    : 
      <Card className={classes.noStock}> 
    <CardActionArea>
     
    
        <CardMedia
          component="img"
          alt={name}
          height='230'
          width='230'
          image={images}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            ${price}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {categories}
          </Typography>
          <Button className={classes.button} variant='outlined' color='primary'>
          NO DISPONIBLE <BlockIcon/>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    }
   </div>
  );

  
}
