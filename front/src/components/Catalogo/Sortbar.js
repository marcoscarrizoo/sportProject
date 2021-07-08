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

const useStyles = makeStyles(() => ({
    sortContainer: {
        backgroundColor: '#3f51b5',
        width: '90%',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    grid: {
        margin: '10px 0'
    }
}));

export default function SortBar() {

    const [filOrder, setOrder] = useState({
        order: "",
        category: ""
    })
    const classes = useStyles()

    function handleChange(e) {
        const n = e.target.name;
        setOrder({
            ...filOrder,
            [n]: e.target.value
        })
    }

    return (
        <div className={classes.sortContainer}>
            <Grid container className={classes.info}>
                <Grid item xs={12} className={classes.grid}>
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
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}> Ordenar por: </Paper>
                    <FormControl variant="filled" >
                        <InputLabel>Orden</InputLabel>
                        <Select
                            native
                            value={filOrder.category}
                            onChange={handleChange}
                            inputProps={{
                                name: 'category',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="gsdg" />
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Min-Max">Price Min-Max</option>
                            <option value="Max-Min">Price Max-Min</option>
                        </Select>
                    </FormControl>
                </Grid>
                {/* <Grid item xs={6}>
                    <Paper elevation={3}> Ordenar por: </Paper>

                </Grid> */}
                <Paper elevation={3}></Paper>
                <Paper elevation={3}></Paper>
                <Paper elevation={3}></Paper>
                <Paper elevation={3}></Paper>
            </Grid>
        </div>
    )
}
