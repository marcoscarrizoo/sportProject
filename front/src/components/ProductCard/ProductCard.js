import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  
  root: {
    maxWidth: 345,
   
  },
  button: {
    width: '100%'
  }
});

export default function ProductCard({ name, images, price, categories }) {
  // { name, price, image, categories } props
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height='230'
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
          <Button className={classes.button} variant='contained' color='primary'>
          comprar
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    
   
  );
}
