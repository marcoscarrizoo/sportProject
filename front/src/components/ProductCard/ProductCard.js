import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import BlockIcon from '@material-ui/icons/Block';
import Popover from '@material-ui/core/Popover';
import './ProductCard.css'

const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    display: 'flex',
    justifyContent :'center'
  },
  button: {
    width: '100%',
    margin: '2px 0'
  },
  noStock: {
    background: '#e0e0e0',
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: 'gray',
  },
  popover: {
    pointerEvents: 'none',
    backgroundColor: '#25252542'
  },
  paper: {
    maxWidth: 300,
    display: 'flex',
    alignContent:'center'
  },
  img:{
    width: 'auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%'
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // alignContent: 'center',
    // justifyContent: 'space-around',
  }
});

export default function ProductCard({ name, images, price, categories, stock }) {
  // { name, price, image, categories } props
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {stock ?
        <Card className={classes.root}>
          <CardActionArea className={classes.div}>
            <CardMedia
              component="img"
              alt={name}
              height='230'
              image={images}
              title={name}
              className={classes.img}
            />
            <CardContent className={classes.card}>
              <Typography gutterBottom variant="h6"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <span className="text">{name}</span>
              </Typography>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography variant="h5">{name}</Typography>
              </Popover>
              <Typography gutterBottom variant="h4" >
                ${price}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {categories}
              </Typography>
              <Button className={classes.button} variant='contained' color='primary'>
                comprar ahora
              </Button>
              <Button className={classes.button} variant='contained' color='secondary'>
                agregar al carrito
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
                NO DISPONIBLE <BlockIcon />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      }
    </div>
  );


}
