import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles/HomePage2';
import cube from '../assets/cube.PNG'
import cylinder from '../assets/cylinder.PNG'
import sphere from '../assets/sphere.svg'
import './styles/HomePage2.css'

export default function HomePage2() {
    const classes=useStyles()

  return <div className='homepage2-container'>
     
      <img src={sphere} className='sphere sphere5'/>
      <img src={sphere} className='sphere sphere6'/>
      <img src={sphere} className='sphere sphere7'/>

  <div className='container'>
    <Box className={classes.main}>
      <Box className={classes.hero2}>
        <img src={cube} alt='cube' className='cube1'/>
          <Box className={classes.section2}>
              <Typography className={classes.heading}>Languify , the Chrome Extension</Typography>
              <img src={cube} alt='cube' className='cube2'/>
              <Typography className={classes.para}>Improve your communication skills while you attend your regular online meetings . Our Extension will give you personalized real time feedback on your grammar , vocabulary and 15+ other key speech areas . Our Interactive learning modules and games recommended specifically for your speech profile make learning fast and fun.</Typography>
          </Box>
        </Box>

        <Box className={classes.hero2}>
          <Box className={classes.section22}>
              <Typography className={classes.heading}>Intry , the Edtech API</Typography>
              <img src={cylinder} alt='cylinder' className='cylinder2'/>
              <Typography className={classes.para}> There is a huge demand for mock interview and oral communication assessments but only a handful of interviewers . We use AI to bridge this gap . Our API hosts interviews and questionnaire sessions and completes them with performance analysis and improvement nudges . This provides users on-demand and unlimited practice sessions alongside improvement trackers.</Typography>
          </Box>
          <img src={cylinder} alt='cylinder' className='cylinder1'/>
        </Box>
      </Box>
  </div>
  </div>;
}
