import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    hero1:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        margin:'auto'
    },
    heading:{
      fontFamily:'Sora',
      fontSize:64,
      fontWeight:'bolder',
      marginBottom:'0.1em',
      color:'#2C3840',
      [theme.breakpoints.down(1071)]: {
        fontSize:45
      },
      [theme.breakpoints.down(686)]: {
        fontSize:38
      },
      [theme.breakpoints.down(577)]: {
        fontSize:36
      },
    },
    para:{
      fontFamily:'Open Sans',
      fontSize:36,
      color:'#586268',
      marginBottom:'1em',
      [theme.breakpoints.down(1071)]: {
        fontSize:26
      },
      [theme.breakpoints.down(686)]: {
        fontSize:20
      },
      [theme.breakpoints.down(577)]: {
        fontSize:15,
        marginBottom:'4em'
      },
    },
}))

export default useStyles