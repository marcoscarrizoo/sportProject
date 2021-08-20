import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./planStyles";
import CheckIcon from "@material-ui/icons/Check";
import { colors, TextField } from "@material-ui/core";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import "./plans.css";

export default function OutlinedCard() {
  const classes = useStyles();
  const [monthly, setMonthly] = useState(false);
  const [annualy, setAnnualy] = useState(false);
  const [monthlyPremium, setMonthlyPremium] = useState(false);
  const [annualyPremium, setAnnualyPremium] = useState(false);

  
  const [state, handleSubmit] = useForm("mjvjaygp");
  const [men, setMen] = useState('')

  if (state.succeeded) {

    return(
    <div style={{display: "flex", justifyContent:'center', background: 'black', color:'white'}}>
      <div style={{fontSize:'40px'}}>Nos pondremos en contacto contigo a la brevedad!!</div>
    </div> 
    )
  }
  const month = () => {
    setAnnualy(false);
    setMonthly(true);
  };
  const annual = () => {
    setMonthly(false);
    setAnnualy(true);
  };

  const monthPremium = () => {
    setMonthlyPremium(true);
    setAnnualyPremium(false);
  };
  const annualPremium = () => {
    setAnnualyPremium(true);
    setMonthlyPremium(true);
  };

  
  return (
    <div className='plans-container'>
      <div className='box3'>
               Planes 
            </div>
      <div className='card'>
        <h1>plan estandar</h1>
        <div>
          <Button
            onClick={month}
            value={monthly}
            variant="contained"
            color="primary"
          >
            Mensual
          </Button>
          <Button
            onClick={annual}
            value={annualy}
            variant="contained"
            color="secondary"
          >
            Anual
          </Button>
        
          </div>
        
          {monthly === true && annualy === false ? (
            <h2>$4200</h2>
          ) : (
            <h2>$40.320</h2>
          )}
        
            <div className='text-plans'>
        <h3>matricula 100% bonificada</h3>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a una sola una sucursal (a eleccion)
        </p>
        </div>

        {/* <Button
          className={classes.button}
          color="secondary"
          size="large"
          variant="contained"
        >
          SPORTGYM
        </Button> */}
      </div>

      <div className='card'>
        <h1>plan premium</h1>
        <div>
          <Button
            onClick={monthPremium}
            value={monthlyPremium}
            variant="contained"
            color="primary"
          >
            Mensual
          </Button>
          <Button
            onClick={annualPremium}
            value={annualyPremium}
            variant="contained"
            color="secondary"
          >
            Anual
          </Button>
        </div>
        <div>
          {monthlyPremium === true && annualyPremium === false ? (
            <h2>$4900</h2>
          ) : (
            <h2>$50.960</h2>
          )}
        </div>
        <div className='text-plans'>
        <h3>matricucla 100% bonificada</h3>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a todas las sucursales
        </p>
        <p>
          <CheckIcon /> Acceso a piscina
        </p>
        <p>
          <CheckIcon /> Actividades sin limite
        </p>
       </div> 
      </div>

      <div className='card2'>
        <form onSubmit={handleSubmit}>
          <h1>DATOS DE CONTACTO</h1>

          <TextField
            
            variant='outlined'
            margin="normal"
            size='small'
            required
            fullWidth
            label="Nombre"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
            className='namedata'
          />

          <TextField
             
            variant="outlined"
            margin="normal"
            required
            size='small'
            fullWidth
            label="Correo electronico"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            className='namedata'
          />
          <TextField
          
            variant="outlined"
            size='small'
            margin="normal"
            required
            fullWidth
            label="Celular"
            id="phone"
            name="phone"
            type="text"
            autoComplete="phone"
            autoFocus
            className='namedata'
          />
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            size='small'
            fullWidth
            label="consulta"
            id="consulta"
            name="consulta"
            type="text"
            autoComplete="consulta"
            autoFocus
            className='namedata'
          />
          <div className='button3'>
          <Button
            
            type="submit"
            disabled={state.submitting}
            fullWidth
            variant="contained"
            color="secondary"
            size="small"
          >
            QUIERO ASESORAMIENTO
          </Button>
          </div>
          
          
        </form> 

      </div>

    </div>
    
  );
}
