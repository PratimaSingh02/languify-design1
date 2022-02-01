import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    media:{
      width:'100%',
      height:351,
      backgroundColor:'#DEE0E1',
      borderRadius:7,
      [theme.breakpoints.down(1129)] : {
        maxHeight:200,
      },
    },
    content:{
      height:260,
      padding:'1em 2em',
      backgroundColor:'#F4F5F5',
      [theme.breakpoints.down(1129)] : {
        height:200,
      },
      [theme.breakpoints.down(601)] : {
        height:400,
      },
    },
    heading:{
        fontWeight:700,
        fontSize:48,
        [theme.breakpoints.down(1129)] : {
          fontSize:24
          },
    },
    subheading:{
        fontSize:18,
        [theme.breakpoints.down(1129)] : {
          fontSize:12
          },
    }
  }))

  export default useStyles