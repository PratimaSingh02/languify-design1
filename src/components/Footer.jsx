import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import useStyles from './styles/Footer';
import logo from '../assets/Logo.svg'
import sphere from '../assets/sphere.svg'
import './styles/Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    const classes=useStyles()

  return <div className='footer'>    
      <img src={sphere} className='sphere sphere9'/>
      <div className='footer-content'>
        <Box className={classes.section1}>
            <img src={logo} alt='languify' className='footer-logo'/>
            <Typography className={classes.para}>{"Made with <3 in India"}</Typography>
        </Box>
        <Box className={classes.section2}>
            <ul className='footer-list'>
                <Link to='/about' className='link'><li>About us</li></Link>
                <li>Products</li>
                <li>Careers</li>
                <Link to='/partners' className='link'><li>Partners</li></Link>
            </ul>
        </Box>
      </div>
  </div>;
}
