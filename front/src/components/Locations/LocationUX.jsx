// // import React, { useState, useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import LocationDraw from "./LocationDraw";
// // import { getLocations } from "../../redux/actions/locationActions";
// // import { makeStyles } from "@material-ui/core/styles";
// // import ImageList from "@material-ui/core/ImageList";
// // import ImageListItem from "@material-ui/core/ImageListItem";
// // import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// // import ListSubheader from "@material-ui/core/ListSubheader";
// // import IconButton from "@material-ui/core/IconButton";
// // import InfoIcon from "@material-ui/icons/Info";
// // import loader from "./loader.gif";
// // import { Button } from "@material-ui/core";
// // import "./locationux.css";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     justifyContent: "space-around",
// //     overflow: "hidden",
// //     backgroundColor: theme.palette.background.paper,
// //   },
// //   imageList: {
// //     width: 500,
// //     height: 450,
// //   },
// //   icon: {
// //     color: "rgba(255, 255, 255, 0.54)",
// //   },
// // }));

// // function LocationUX() {
// //   const dispatch = useDispatch();
// //   const classes = useStyles();

// //   const initialSelection = {
// //     lat: 20,
// //     lng: 20,
// //   };
// //   useEffect(() => {
// //     dispatch(getLocations());
// //   }, [dispatch]);

// //   const locations = useSelector((state) => state.location.locations);
// //   const [selection, setselection] = useState(initialSelection);
// //   console.log(locations);

// //   function btnHandler(e) {
// //     const { value } = e.target;
// //     const data = locations.find((e) => e.id == value);
// //     data && setselection(data);
// //   }

// //   return (
// //     <div>
// //       <table>
// //         <th>
// //           <div className="group">
// //             {locations?.length &&
// //               locations.map((loc) => (
// //                 <Button
// //                 variant='outlined'
// //                   className="btn"
// //                   key={loc.id}
// //                   value={loc.id}
// //                   onClick={btnHandler}
// //                 >
// //                   {loc.description}
// //                 </Button>
// //               ))}
// //           </div>
// //         </th>
// //         <tr>
// //           <th>
// //             {selection ? (
// //               <LocationDraw location={selection} />
// //             ) : (
// //               <img src={loader} alt="Loading..." />
// //             )}
// //           </th>

// //           <th>
// //             <div className={classes.root}>
// //               <ImageList rowHeight={180} className={classes.imageList}>
// //                 <ImageListItem
// //                   key="Subheader"
// //                   cols={2}
// //                   style={{ height: "auto" }}
// //                 ></ImageListItem>
// //                 {selection?.images &&
// //                   selection.images.map((item) => (
// //                     <ImageListItem key={item}>
// //                       <img src={item} alt="no img" />
// //                     </ImageListItem>
// //                   ))}
// //               </ImageList>
// //             </div>
// //           </th>
// //         </tr>
// //       </table>
// //     </div>
// //   );
// // }

// // export default LocationUX;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  title: {
   display: 'flex',
  alignItems: 'center'
  },
  div: {
    display: "flex",
    flexWrap: 'wrap'
    
  },
 
  root: {
    maxWidth: 345,
    margin: '50px 100px',
    transition: '0.5s',
    '&:hover': {
      background: '#bdbdbd',
      margin: '100px 100px'
    }
  },
  media: {
    height: 100,
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
}));

export default function LocationUx() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const sedes = [
    {
      name: "Devoto",
      img: "https://cdn-3.expansion.mx/dims4/default/5976b2e/2147483647/strip/true/crop/3864x2576+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F55%2F73%2F6b4cecec48b88cabb07e8c4c1c3e%2Fistock-1132006407.jpg",
      direccion: "Desaguadero 3390 - CABA",
      whatsapp: "1554908732",
    },
    {
      name: "Congreso",
      img: "https://px.cdn.lanueva.com/082020/1596820205687.jpg",
      direccion: "Federico Lacroze 2000 CABA",
      whatsapp: "1576890976",
    },
    {
      name: "Barrio Norte",
      img: "https://shopsmart.com.mx/353-large_default/piso-gimnasio-hule-caucho-modular-6-mm.jpg",
      direccion: "Av Santa Fe 2500 CABA",
      whatsapp: "1516243565",
    },
    {
      name: "Vicente Lopez",
      img: "https://www.cronista.com/files/image/325/325622/60648acf39760.jpg",
      direccion: "General Paz 3001 Zona Norte",
      whatsapp: "1590905665",
    },
    {
      name: "Martinez",
      img: "https://images.lavoz.com.ar/resizer/zO2reUlPaVk0p8C5I9z9nrnS5Rs=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/YFIQ35ZMRJBJPAVASH4QLZ77YI.jpg",
      direccion: "Juan Payro 2783 Zona Norte ",
      whatsapp: "1583749098",
    },
    {
      name: "Tigre",
      img: "https://mercadofitness.com/mx/wp-content/uploads/sites/2/2021/04/Fundador-Sport-Gym-Gimnasio-Ciudad-Victoria-Mexico.jpg",
      direccion: "Av. Cazon 200 Zona Norte ",
      whatsapp: "1578983076",
    },
  ];

  return (
    <div className={classes.div}>
      {sedes.map((e) => (
       
          <Card className={classes.root}>
            
            <CardMedia className={classes.media} image={e.img} />
            <CardHeader className={classes.title} title={e.name} />
            <CardContent>
              <Typography variant="h6" color="primary" component="p">
              <HomeIcon/>Direccion: {e.direccion}
              </Typography>
              <Typography variant="h6" color="primary" component="p">
              <WhatsAppIcon/>Contacto: {e.whatsapp}
              </Typography>
            </CardContent>
          </Card>
        
      ))}
    </div>
  );
}
