import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles(theme=>({
    container:{
        position: 'relative',
        marginTop: 112,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'100%',
        /* height:2000px;temp */
        // border:'1px solid black'
      },
    partners:{
        width:'70%',
        // height:00,
        marginTop:'10em',
        marginBottom:'4em',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // border:'1px solid red',
        [theme.breakpoints.down(1071)]: {
            width:'90%'
        },
        [theme.breakpoints.down(577)]: {
            width:'97%',
            marginBottom:'7em',
        },
    },
    heading:{
        fontFamily:'Sora',
        fontWeight:700,
        fontSize:64,
        color:'#2C3840',
        [theme.breakpoints.down(1071)]: {
            fontSize:46
        },
        [theme.breakpoints.down(577)]: {
            fontSize:36
        },
    },
    para:{
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:36,
        textAlign:'center',
        color:'#586268',
        [theme.breakpoints.down(1071)]: {
            fontSize:30
        },
        [theme.breakpoints.down(577)]: {
            fontSize:20
        },
    },
    parntersImages:{
        width:'70%',
        // height:00,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',       
        marginBottom:'7em',
        // border:'1px solid red',
        [theme.breakpoints.down(1320)]: {
            width:'98%'
        },
        [theme.breakpoints.down(577)]: {
            // width:'98%'
        },
    },
    partnersRow:{      
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around',
        // border:'1px solid yellow'
    },
    partnerImg:{
        margin:'1em',
        [theme.breakpoints.down(944)]: {
            width:110
        },
        [theme.breakpoints.down(577)]: {
            width:100
        },
    },
    partnerImg2:{
        margin:'1em',
        [theme.breakpoints.down(577)]: {
            width:150,
            margin:0
        },
    },
    partnerImg3:{
        margin:'1em',
        [theme.breakpoints.down(577)]: {
            width:300,
            margin:0
        },
    }
}))

export default useStyles