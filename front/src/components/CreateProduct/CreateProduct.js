import React from "react";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateProduct() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Descripcion"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Imagenes"
          defaultValue=""
          variant="outlined"
        />

        <TextField
          id="outlined-number"
          label="Precio"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Stock"
          type="number"
          variant="outlined"
        />
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <p>
            <FormLabel component="legend">Category/ies</FormLabel>
          </p>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
        </FormControl>
      </div>
    </form>
  );
}
