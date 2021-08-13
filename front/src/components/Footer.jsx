import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="rgba(161, 161, 161, 0.863)">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Footer() {
  

  return (
    <div className='footer-container'>
     <div><h1 >SPORTGYM</h1></div> 
     <div><h3>En SportGym cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329)</h3></div>
      <div><Copyright /></div>  
          
        
      
    </div>
  );
}