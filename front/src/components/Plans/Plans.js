import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./planStyles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckIcon from "@material-ui/icons/Check";

export default function OutlinedCard() {
  const classes = useStyles();
  const [monthly, setMonthly] = useState(false);
  const [annualy, setAnnualy] = useState(false);
  const [monthlyPremium, setMonthlyPremium] = useState(false);
  const [annualyPremium, setAnnualyPremium] = useState(false);

  const month = () => {
    setAnnualy(false);
    setMonthly(true);
  };
  const annual = () => {
    setMonthly(false);
    setAnnualy(true);
  };

const monthPremium = () => {
    setMonthlyPremium(true)
    setAnnualyPremium(false)
} 
const annualPremium = () => {
    setAnnualyPremium(true)
    setMonthlyPremium(true)
} 

const foto = 'https://www.motivaction.nl/images/Expertise/Sport-marktonderzoek.jpg'
  return (
      <div className={classes.container} style={{backgroundImage:`url(${foto})`}}>
        <div className={classes.grid}>
          <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          PLAN STANDAR
        </Typography>
        <div className={classes.buttons}>
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
        <div className={classes.price}>
          {monthly === true && annualy === false ? (
            <h2>$4200</h2>
          ) : (
            <h2>$40.320</h2>
          )}
        </div>
        <Typography variant="body2" component="p">
          MATRICULA BONIFICADA 100%
        </Typography>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a una sola una sucursal (a eleccion)
        </p>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          color="secondary"
          size="big"
          variant="contained"
        >
          ASOCIATE
        </Button>
      </CardActions>
    </Card>
    </div>

    
            <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          PLAN PREMIUM
        </Typography>
        <div className={classes.buttons}>
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
        <div className={classes.price}>
          {monthlyPremium === true && annualyPremium === false ? (
            <h2>$4900</h2>
          ) : (
            <h2>$50.960</h2>
          )}
        </div>
        <Typography variant="body2" component="p">
          MATRICULA BONIFICADA 100%
        </Typography>

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
      </CardContent>
      <CardActions>
        <Button
          className={classes.button2}
          color="secondary"
          size="big"
          variant="contained"
        >
          ASOCIATE
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
  );
}
