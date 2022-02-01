import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    main:{
      width:'100%',
    },
      hero2:{
          position:'relative',
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          margin:'auto',
          // border:'1px solid orange',
          width:'100%',
          marginBottom:'5em'
      },
      section2:{
          display:'flex',
          width:'50%',
          flexDirection:'column',
          [theme.breakpoints.down(1071)]: {
              marginLeft:-50
          },
          [theme.breakpoints.down(577)]: {
              width:'90%',
              margin:'0 auto',
              textAlign:'center',
              alignItems:'center'
          },
      },
      section22:{
        display:'flex',
        width:'50%',
        marginRight:'1em',
        flexDirection:'column',
        [theme.breakpoints.down(577)]: {
            width:'90%',
            margin:'0 auto',
            textAlign:'center',
            alignItems:'center'
        },
        [theme.breakpoints.down(749)]: {
          // marginRight:'1em'
      },
    },
      heading:{
        fontFamily:'Sora',
        fontSize:48,
        fontWeight:'bolder',
        marginBottom:'0.2em',
        lineHeight:'1.2em',
        color:'#2C3840',
        [theme.breakpoints.down(1071)]: {
          fontSize:30
        },
        [theme.breakpoints.down(685)]: {
          fontSize:20
        },
      },
      para:{
        fontFamily:'Open Sans',
        fontSize:24,
        color:'#586268',
        lineHeight:'1.3em',
      //   marginBottom:'1em',
       [theme.breakpoints.down(1071)]: {
          fontSize:20
          },
       [theme.breakpoints.down(685)]: {
              fontSize:15
        },
      },
  }))

  export default useStyles