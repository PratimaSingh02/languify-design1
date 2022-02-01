import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles/HomePage1';
import sphere from '../assets/sphere.svg'
import './styles/HomePage1.css'

export default function HomePage1() {
    const classes=useStyles()

    const tryClick=e=>{
      e.target.style.backgroundColor='#01346B'
    }

  return <div className='homepage1-container'>
  
      <img src={sphere} className='sphere sphere1'/>
      <img src={sphere} className='sphere sphere2'/>
      <img src={sphere} className='sphere sphere3'/>
      <img src={sphere} className='sphere sphere4'/>

  <div className='container'>
      <Box className={classes.hero1}>
        <Typography className={classes.heading}>Communicate Confidently</Typography>
        <Typography className={classes.para}>{"Languify is an AI company with tools to help its users communicate better ."}
        </Typography>
        <button type='submit' className='tryBtn' onClick={e=>tryClick(e)}>Try it now</button>
      </Box>
  </div>
  </div>;
}
