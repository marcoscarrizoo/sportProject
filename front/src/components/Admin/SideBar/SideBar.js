import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import img from '../../../images/navx.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundImage: `url(${img})`,
        backgroundColor: "#212121",
    },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
},
menuButtonHidden: {
    display: 'none',
},
title: {
    flexGrow: 1,
},
drawerPaper: {
  color:"#ffffff",
  backgroundColor: "transparent",
  position: 'relative',
  whiteSpace: 'nowrap',
  width: drawerWidth,
  transition: "0.5s",
  },
  drawerPaperClose: {
    transition: "0.5s",
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
    },
},
appBarSpacer: theme.mixins.toolbar,
content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
},
container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
},
paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
},
fixedHeight: {
    height: 240,
},
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} style={ !open ? {justifyContent:"initial", padding:"0 5px"}: {justifyContent: 'flex-end'}}>
          <IconButton onClick={handleDrawer}>
            {
                open 
                ? <ChevronLeftIcon style={{color:"#ffff"}}/>
                : <MenuIcon style={{color:"#ffff"}}/>
            }
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
    </div>
  );
}