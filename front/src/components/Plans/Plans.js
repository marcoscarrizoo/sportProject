import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./planStyles";
import CheckIcon from "@material-ui/icons/Check";
import { TextField } from "@material-ui/core";
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
  const history = useHistory();

  if (state.succeeded) {
    return (
      Swal.fire({
        text: "Nos pondremos en contacto a la brevedad",
        icon: "success",
        width: "20rem",
        timer: "6000",
        showConfirmButton: false,
      }),
      history.push("/productos")
    );
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
        

        <h3>matricula 100% bonificada</h3>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a una sola una sucursal (a eleccion)
        </p>

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

      <div className='card'>
        <form onSubmit={handleSubmit}>
          <h1>DATOS DE CONTACTO</h1>
          <TextField
            // onChange={(e) => { setEmail(e.target.value) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nombre"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
          />

          <TextField
            // onChange={(e) => { setEmail(e.target.value) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Correo electronico"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            // onChange={(e) => { setEmail(e.target.value) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Celular"
            id="phone"
            name="phone"
            type="text"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            // onChange={(e) => { setEmail(e.target.value) }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="consulta"
            id="consulta"
            name="consulta"
            type="text"
            autoComplete="consulta"
            autoFocus
          />
          <Button
            className={classes.button3}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
          >
            QUIERO ASESORAMIENTO
          </Button>
        </form>
      </div>
    </div>
    
  );
}
