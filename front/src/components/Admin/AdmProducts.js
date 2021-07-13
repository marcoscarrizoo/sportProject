import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productsActions";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { deleteProduct } from "../../redux/actions/adminActions";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 0 10px 0',
        display: 'flex',
        flexDirection: ' column',
        alignItems: 'center',
        marginTop: "10px"
    },
    grid: {
        backgroundColor: '#ededed',
        padding: '10px',
    },
    description: {
        borderBottom: '2px solid',
        backgroundColor: '#212121',
        padding: '10px',
        color: 'white'
    },
    info: {
        marginTop: '10px',
        borderBottom: 'solid 2px '
    },
    infob: {
        justifyContent: 'end',
        marginTop: '10px',
        borderBottom: 'solid 2px '
    },
    button: {
        margin: theme.spacing(1),
    },
    delete: {
        margin: theme.spacing(1),
        backgroundColor: 'red'
    }
}));


export default function AdmProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const classes = useStyles();



    useEffect(() => {
        if (!products?.length) {
            dispatch(getProducts());
        }
    }, [dispatch]);

    return (
        <div className={classes.root} >

            <h1>Control de productos</h1>

            <Grid container xs={11} xl={12} className={classes.grid}>
                <Grid container xs={12} className={classes.description}>
                    <Grid xs={7} sm={6} className={classes.info}>
                       <h4>NOMBRE</h4> 
                    </Grid>
                    <Grid xs={1} className={classes.info}>
                        STOCK
                    </Grid >
                    <Grid xs={1} className={classes.info}>
                        PRECIO
                    </Grid >

                    <Grid xs={1} sm={2} className={classes.infob}>
                        EDITAR
                    </Grid>
                    <Grid xs={1} sm={2} className={classes.infob}>
                        ELIMINAR
                    </Grid>
                </Grid>
                {
                    products !== null &&
                    products.map(p =>
                        <Grid container xs={12} key={p.id}>
                            <Grid xs={7} sm={6} className={classes.info}>
                                {p.name}
                            </Grid>
                            <Grid xs={1} className={classes.info}>
                                {p.stock}
                            </Grid >
                            <Grid xs={1} className={classes.info}>
                                {`$${p.price}`}
                            </Grid >

                            <Grid xs={1} sm={2} className={classes.infob}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    EDITAR
                                </Button>
                            </Grid>
                            <Grid xs={1} sm={2} className={classes.infob}>
                                <Button
                                    onClick={() => dispatch(deleteProduct(p.id))}
                                    variant="contained"
                                    color="primary"
                                    className={classes.delete}
                                    startIcon={<DeleteIcon />}
                                >
                                    ELIMINAR
                                </Button>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
}



    //     <div>
    //         { products !== null &&
    //             products.map( p => 
    //                 <div style={{ width:"100%"}}>
    //                     <p>{p.name}</p>
    //                 </div>
    //             )
    //         }
    //     </div>
    // )
