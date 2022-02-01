import React from 'react';
import { Box,Button, Typography } from '@material-ui/core';
import useStyles from './styles/Navbar';
import logo from '../assets/Logo.svg'
import dropdown from '../assets/dropdown.svg'
import mobileLogo from '../assets/mobileLogo.svg'
import hamburger from '../assets/hamburger.svg'
import cancel from '../assets/cancel.svg'
import './styles/Navbar.css'

export default function Navbar() {
    const classes=useStyles()

  const handleClick = () => {
    document.querySelector('.menu').style.display='block'
  };

  const hideMenu=()=>{
    document.querySelector('.menu').style.display='none'
  }

  const hamClick=()=>{
      document.querySelector('.sidebar').style.display='flex'
  }

  const cancelClick=()=>{
      document.querySelector('.sidebar').style.display='none'
  }

  const downloadClick=e=>{
      e.target.style.backgroundColor='#01346B'
  }

  return <>
  <Box className={classes.navbar}>
        <img src={logo} alt='languify' className='logo'/>
        <img src={mobileLogo} alt='languify' className='mobileLogo'/>
        <Box className={classes.section2}>
            {/* dropdown menu */}
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} onBlur={hideMenu}>
                <Typography className={classes.products}>Products</Typography>
                <img src={dropdown} alt='click'/>
            </Button>
            <div className='menu'>
                <ul>
                    <li>Extension</li>
                    <li>API</li>
                </ul>
            </div>
            {/* End of dropdown menu */}

            <a href='https://chrome.google.com/webstore/detail/languify/pfikgbfdjgabbhiladpmjcnahjoedknh'><button type='submit' className='downloadBtn' onClick={e=>downloadClick(e)}>Download Chrome Extension</button></a>
        </Box>
        <img src={hamburger} alt='menu' onClick={hamClick} className='hamburger'/>
    </Box>

    <div className='sidebar'>
      <div style={{height:'97%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Box className={classes.sidebar1}>
           <img src={cancel} style={{float:'right',marginRight:-10}} onClick={cancelClick} alt='cancel'/>        
               <ul className='sidebarList' style={{marginTop:40}}>
                <li style={{color:'#2C3840',fontWeight:400}}>Products</li>
                <li>Extension</li>
                <li style={{marginBottom:0}}>API</li>
            </ul>
        </Box>
        
        <Box className={classes.sidebar2}>
            <hr style={{width:'80%'}}/>
            <ul className='sidebarList' style={{margin:0,marginBottom:'1em'}}>
                <li>About Us</li>
                <li>Careers</li>
                <li>Partners</li>
            </ul>
            <Box className={classes.logoBox}>
                <img src={logo} className='sidebarLogo' alt='languify'/>
                <Typography className={classes.para}>{"Made with <3 in India"}</Typography>
            </Box>
        </Box>
      </div>
    </div>
    </>
}
