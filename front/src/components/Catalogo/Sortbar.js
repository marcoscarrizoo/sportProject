import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    sortContainer: {
        backgroundColor: '#3f51b5',
        width: '90%',
        height: '700px'
    }
}));

export default function SortBar(){
    
    const classes = useStyles()

    return(
        <div className={classes.sortContainer}>

        </div>
    )
}