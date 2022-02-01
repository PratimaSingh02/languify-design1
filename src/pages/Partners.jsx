import React,{useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import useStyles from './styles/Partners'
import sphere from '../assets/sphere.svg'
import partner1 from '../assets/partners/partner1.svg'
import partner2 from '../assets/partners/partner2.svg'
import partner3 from '../assets/partners/partner3.svg'
import partner4 from '../assets/partners/partner4.svg'
import partner5 from '../assets/partners/partner5.svg'
import partner6 from '../assets/partners/partner6.svg'
import partner7 from '../assets/partners/partner7.svg'
import partner8 from '../assets/partners/partner8.svg'
import partner9 from '../assets/partners/partner9.svg'
import partner10 from '../assets/partners/partner10.svg'
import partner11 from '../assets/partners/partner11.svg'
import partner12 from '../assets/partners/partner12.svg'
import support1 from '../assets/support/support1.svg'
import support2 from '../assets/support/support2.svg'
import support3 from '../assets/support/support3.svg'
import support4 from '../assets/support/support4.svg'
import support5 from '../assets/support/support5.svg'
import support6 from '../assets/support/support6.svg'


export default function TeamPage() {
    const classes=useStyles()
    const [nameDesignation,setNameDesignation]=useState('hidden')

    const showNameDesignation=(e)=>{
        // setNameDesignation(true)
        console.log(e.target.children);
    }

    const hideNameDesignation=(e)=>{
        // setNameDesignation(false)
    }

  return <div className={classes.container}>
      <img src={sphere} className='sphere sphere1'/>
      <img src={sphere} className='sphere sphere2'/>
      <img src={sphere} className='sphere sphere3'/>
      <img src={sphere} className='sphere sphere10'/>
      <img src={sphere} className='sphere sphere11'/>
      <img src={sphere} className='sphere sphere12'/>

      <Box className={classes.partners}>
          <Typography className={classes.heading}>Partners</Typography>
          <Typography className={classes.para}>{"Languify is committed to work with its partners to help and provide them with tools to help their users communicate better"}</Typography>
      </Box>

      <Box className={classes.parntersImages}>
          <Box className={classes.partnersRow}>
              <img className={classes.partnerImg} src={partner1} alt='logo'/>
              <img className={classes.partnerImg} src={partner2} alt='logo'/>
              <img className={classes.partnerImg} src={partner3} alt='logo'/>
              <img className={classes.partnerImg} src={partner4} alt='logo'/>
          </Box>
          <Box className={classes.partnersRow}>
              <img className={classes.partnerImg} src={partner5} alt='logo'/>
              <img className={classes.partnerImg} src={partner6} alt='logo'/>
              <img className={classes.partnerImg} src={partner7} alt='logo'/>
              <img className={classes.partnerImg} src={partner8} alt='logo'/>
          </Box>
          <Box className={classes.partnersRow}>
              <img className={classes.partnerImg} src={partner9} alt='logo'/>
              <img className={classes.partnerImg} src={partner10} alt='logo'/>
              <img className={classes.partnerImg} src={partner11} alt='logo'/>
              <img className={classes.partnerImg} src={partner12} alt='logo'/>
          </Box>
      </Box>

      <Box className={classes.partners}>
          <Typography className={classes.heading}>Supported By</Typography>
          <Typography className={classes.para}>{"Languify is supported by the following groups"}</Typography>
      </Box>

      <Box className={classes.parntersImages} style={{marginBottom:'15em'}}>
          <Box className={classes.partnersRow}>
              <img className={classes.partnerImg2} src={support1} alt='logo'/>
              <img className={classes.partnerImg3} src={support2} alt='logo'/>
          </Box>
          <Box className={classes.partnersRow}>
              <img className={classes.partnerImg} src={support3} alt='logo'/>
              <img className={classes.partnerImg} src={support4} alt='logo'/>
              <img className={classes.partnerImg} src={support5} alt='logo'/>
              <img className={classes.partnerImg} src={support6} alt='logo'/>
          </Box>
      </Box>
  </div>;
}
