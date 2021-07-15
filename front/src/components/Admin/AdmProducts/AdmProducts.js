import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { getProducts } from "../../../redux/actions/productsActions";


import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { deleteProduct } from "../../../redux/actions/adminActions";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 0 10px 0',
        display: 'flex',
        flexDirection: ' column',
        alignItems: 'center',
        marginTop: "10px",
        width: '80%'
    },
    grid: {
        backgroundColor: 'white',
        padding: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '10px'
    },
    description: {
        backgroundColor: '#ededed',
        padding: '10px',
        color: 'black',
        maxHeight: '50px'
    },
    info: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    infob: {
        justifyContent: 'end',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(1),
    },
    delete: {
        margin: theme.spacing(1),
        backgroundColor: 'red'
    },
    products: {
        margin: '10px 0',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        maxHeight: '80px'
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
    }, [dispatch, products?.length]);

    return (
        <div className={classes.root} >

            <Grid container xs={11} xl={12} className={classes.grid}>
                <Grid container xs={12} className={classes.description}>
                    <Grid xs={2} sm={2} md={3} lg={5} className={classes.info}>
                        <h4>NOMBRE</h4>
                    </Grid>
                    <Grid xs={2} sm={2} md={2} lg={1} className={classes.info}>
                        STOCK
                    </Grid >
                    <Grid xs={3} sm={1} md={2} lg={1} className={classes.info}>
                        PRECIO
                    </Grid >

                    <Grid xs={2} sm={3} md={2} lg={2} className={classes.infob}>
                        EDITAR
                    </Grid>
                    <Grid xs={2} sm={3} md={2} lg={2} className={classes.infob}>
                        ELIMINAR
                    </Grid>
                </Grid>
                {
                    products !== null &&
                    products.map(p =>
                        <Grid container xs={12} key={p.id} className={classes.products}>
                            <Grid xs={2} sm={2} md={3} lg={5} className={classes.info} style={{"paddingLeft": "10px"}}>
                                <h4>{p.name}</h4>
                            </Grid>
                            <Grid xs={2} sm={2} md={2} lg={1} className={classes.info}>
                                {p.stock}
                            </Grid >
                            <Grid xs={1} sm={1} md={2} lg={1} className={classes.info}>
                                {`$${p.price}`}
                            </Grid >

                            <Grid xs={3} sm={3} md={2} lg={2} className={classes.infob}>
                                <Link to={`/admin/product/${p.id}`}>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        className={classes.button}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        EDITAR
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid xs={3} sm={3} md={2} lg={2} className={classes.infob}>
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
