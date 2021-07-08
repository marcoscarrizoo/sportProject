import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
    sortContainer: {
        width: '90%',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    grid: {
        margin: '20px 10px',
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '15px',
        width: '100%'
    }
}));

export default function SortBar() {

    const [filOrder, setfilOrder] = useState({
        order: "",
        category: []
    })
    const classes = useStyles()

    function handleChange(e) {
        e.preventDefault()
        console.log(e.target)
        const n = e.target.name;
        if(n === "order") {
            setfilOrder({
                ...filOrder,
                [n]: e.target.value
            }) 
        }else if ( n === "category") {
            filOrder[n].includes(e.target.value) 
            ? setfilOrder({
                ...filOrder,
                [n]: filOrder[n].filter(c => c !== n)
            })
            : setfilOrder({
                ...filOrder,
                [n]: [...filOrder[n], e.target.value]
            });
            e.target.checked = !e.target.checked
        }
    }

    return (
        <div className={classes.sortContainer}>
            <Grid container className={classes.info}>

            </Grid>
            <Grid container className={classes.info}>
                <Grid item className={classes.grid}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Orden</FormLabel>
                        <RadioGroup aria-label="Orden" name="order" value={filOrder.order} onChange={handleChange}>
                            <FormControlLabel value="AZ" control={<Radio />} label="A-Z" />
                            <FormControlLabel value="ZA" control={<Radio />} label="Z-A" />
                            <FormControlLabel value="minMax" control={<Radio />} label="Precio: Min-Max" />
                            <FormControlLabel value="maxMin" control={<Radio />} label="Precio: Max-Min" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item className={classes.grid}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Categorias : </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox value="Mancuernas"  onChange={() => handleChange} name="category" />}
                                label="Mancuernas"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Barras"  onChange={() => handleChange} name="category" />}
                                label="Barras"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Suplementos"  onChange={() => handleChange} name="category" />}
                                label="Suplementos"
                            />
                        </FormGroup>
                        <FormHelperText>Encuentra por categoria</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
