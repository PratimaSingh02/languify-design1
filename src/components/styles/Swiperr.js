import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    main:{
      width:1084,
      height:611,
      marginBottom:'5em',
      border:'none',
      borderRadius:7,
      backgroundColor:'#F4F5F5',
      boxShadow: '0px 15px 10px -15px #D3D3D3',   
      [theme.breakpoints.down(1129)] : {
        maxHeight:400,
        maxWidth:  580
        },
      [theme.breakpoints.down(601)] : {
        maxHeight:550,
          maxWidth:  300
      }
    },
    card:{
      margin:'0 auto',
      cursor:'pointer',
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'flex-start', 
      borderRadius:7,
  },
  heading:{
      fontFamily:'Sora',
      fontWeight:700,
      fontSize:48,
      marginBottom:'1em',
    [theme.breakpoints.down(1071)] : {
      fontSize:32,
      },
    [theme.breakpoints.down(576)] : {
      fontSize:24
    }
  }
  }))

  export default useStyles