// import React from "react";
// import { useTheme } from "@material-ui/core/styles";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import styles from "./homeStyles";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const tutorialSteps = [
//   {
//     imgPath:
//       "https://image.freepik.com/foto-gratis/brazo-entrenamiento-culturista-banda-resistencia_7502-4758.jpg",
//   },
//   {
//     imgPath:
//       "https://cdn.euroinnova.edu.es/img/subidasEditor/instructor%20de%20gym-1611452143.webp",
//   },
//   {
//     imgPath:
//       "https://st2.depositphotos.com/3386033/5304/i/950/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg",
//   },
//   {
//     imgPath:
//       "https://bodytech.com.co.paginade.iguarayalabs.com/uploads/post/03d28af749454db285945cd083f60507/234-las-manos-en-el-gym.jpg",
//   },
//   {
//     imgPath:
//       "https://img.freepik.com/foto-gratis/pesos-ejercicio-pesas-fuerte-atletica_1139-709.jpg?size=626&ext=jpg",
//   },
//   {
//     imgPath:
//       "https://image.freepik.com/foto-gratis/hombre-joven-fitness-estudio_7502-5008.jpg",
//   },
// ];

// function Home() {
//   const classes = styles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length - 1;

//   const handleNext = () => {
//     if (activeStep === maxSteps) {
//       setActiveStep(0);
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (activeStep === 0) {
//       setActiveStep(maxSteps);
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     }
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div className={classes.root}>
//       <Paper square elevation={0} className={classes.header}>
//         <Typography>{tutorialSteps[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {tutorialSteps.map((step, index) => (
//           <div key={index}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img
//                 className={classes.img}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         variant="dots"
//         steps={6}
//         position="static"
//         activeStep={activeStep}
//         className={classes.root}
//         nextButton={
//           <Button size="small" onClick={handleNext}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//           </Button>
//         }
//       />
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { useHistory } from "react-router";
import "./home.css";
import Plans from "../Plans/Plans";
import Footer from "../Footer";
import { Button } from "@material-ui/core";
import Activities from "../Dashboard/Activities";
import OurPlans from "../Dashboard/OurPlans";

const Home = () => {
  const history = useHistory();

  function catalog() {
    history.push("/productos");
  }

  return (
    <div className="home-container">
      <div className="div-home">
        {/* <div className='home-position'>
          <button onClick={catalog} className='home-button'>Nuestro Catalogo</button>
        </div> */}
      </div>

      <div>
        <Activities />
      </div>

      <div>
        <Plans />
      </div>

      <div>
        <OurPlans />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// const itemData2 = [
//   {
//       img: 'https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg',
//       title: 'Musculación'
//   },
//   {
//       img: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/18/15634659732891.png',
//       title: 'CrossFit'
//   },

//   {
//       img: 'https://coolwallpapers.me/picsup/5724879-muay-thai-boxing-wallpapers.jpg',
//       title: 'Kick Boxing'
//   },
//   {
//       img: 'https://unycos.com/blog/wp-content/uploads/2019/03/entrenando-para-evitar-errores-que-cometemos-al-nadar.jpg',
//       title: 'Natacion'
//   },
//   {
//       img: 'https://img.wallpapersafari.com/desktop/728/410/1/7/b1vtO7.jpg',
//       title: 'Calistenia'
//   },
//   {
//       img: 'https://www.mensjournal.com/wp-content/uploads/2018/06/CyclingClass.jpg?quality=86&strip=all',
//       title: 'Spinning'
//   }

// ]
