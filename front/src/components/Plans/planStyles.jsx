import { makeStyles } from "@material-ui/core";

export default makeStyles({
    root: {
      width: '400px',
      height: '520px',
      boxShadow: '0 0 3px',
      backgroundColor: 'rgba(150, 150, 150, 0.849)',
      margin: '30px',
      '&:hover': {
        background: '#bdbdbd',
       
      }
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 30,
      display: 'flex',
      justifyContent: 'center'
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      width: '100%',
      marginTop: '90px',
      
    },
    button2: {
      width: '100%',
      marginTop: '55px'
    },
    button3: {
      width: '100%',
      marginBottom: '30px'
    },
    buttons: {
      marginLeft: '40px'
    },
    price: {
      marginLeft: '90px'
    },
    container: {
      
      display: "flex",
      flexDirection: 'row',
      // gridTemplateColumns: "repeat(3, 1fr)",
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: "0.4s",
      height: '92vh'
      
    },
   
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      marginLeft: '30%',
    },
    datos: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '25px',
      
    },
   
  });