import React,{useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import useStyles from './styles/TeamPage'
import './styles/TeamPage.css'
import sphere from '../assets/sphere.svg'


export default function TeamPage() {
    const classes=useStyles()

  return <div className={classes.container}>
      <img src={sphere} className='sphere sphere1'/>
      <img src={sphere} className='sphere sphere2'/>
      <img src={sphere} className='sphere sphere3'/>
      <img src={sphere} className='sphere sphere10'/>
      <img src={sphere} className='sphere sphere11'/>
      <img src={sphere} className='sphere sphere12'/>

      <Box className={classes.about}>
          <Typography className={classes.heading}>About Us</Typography>
          <Typography className={classes.para}>{"Languify’s team is all about innovation and commitment for their mission. "}</Typography>
      </Box>

      <Box className={classes.team}>
        <Typography className={classes.heading}>Meet our Team</Typography>
        <Box className={classes.flexbox} >
            <Box className={classes.card}>
                <Box className={`${classes.card1} card1`}>
                    <Box className={`${classes.nameDesignation} nameDesignation1`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card2} card2`}>
                    <Box className={`${classes.nameDesignation} nameDesignation2`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card3} card3`}>
                    <Box className={`${classes.nameDesignation} nameDesignation3`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card4} card4`}>
                    <Box className={`${classes.nameDesignation} nameDesignation4`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card5} card5`}>
                    <Box className={`${classes.nameDesignation} nameDesignation5`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>

      <Box className={classes.mentor}>
        <Typography className={`${classes.heading} ${classes.heading2}`}>Mentors</Typography>
        <Box className={classes.flexbox}>
            <Box className={classes.card}>
            <Box className={`${classes.card6} card6`}>
                    <Box className={`${classes.nameDesignation} nameDesignation6`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card7} card7`}>
                    <Box className={`${classes.nameDesignation} nameDesignation7`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card8} card8`}>
                    <Box className={`${classes.nameDesignation} nameDesignation8`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.card}>
            <Box className={`${classes.card9} card9`}>
                    <Box className={`${classes.nameDesignation} nameDesignation9`}>
                        <Typography className={classes.name}>Lokap</Typography>
                        <Typography className={classes.name}>Sahu</Typography>
                        <Typography className={classes.designation}>CEO, FOUNDER</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>
  </div>;
}
