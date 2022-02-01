import {makeStyles} from '@material-ui/core'
import member1 from '../../assets/member1.svg'
import member2 from '../../assets/member2.svg'
import member3 from '../../assets/member3.svg'
import member4 from '../../assets/member4.svg'
import member5 from '../../assets/member5.svg'
import mentor1 from '../../assets/mentor1.svg'
import mentor2 from '../../assets/mentor2.svg'
import mentor3 from '../../assets/mentor3.svg'
import mentor4 from '../../assets/mentor4.svg'

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
    about:{
        width:'70%',
        // height:00,
        marginTop:'10em',
        marginBottom:'7em',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // border:'1px solid red',
        [theme.breakpoints.down(1071)]: {
            width:'90%'
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
    heading2:{
        [theme.breakpoints.down(577)]: {
            marginBottom:'1em'
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
    team:{
        width:900,
        // height:00,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',       
        marginBottom:'7em',
        // border:'1px solid red',
        [theme.breakpoints.down(1071)]: {
            width:685
        },
        [theme.breakpoints.down(686)]: {
            width:'98%'
        },
    },
    flexbox:{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2em',
        // border:'1px solid black',
    },
    card:{
        height:256,
        width:256,
        margin:10,
        cursor:'pointer',
        // border:'1px solid black',
        [theme.breakpoints.down(1071)]: {
            height:190,
            width:190,
        },
        [theme.breakpoints.down(686)]: {
            height:168,
            width:168,
            margin:5
        },
        '&>*':{
            width:'100%',
            height:'100%',      
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'flex-end',      
            borderRadius: 8,
            // border:'1px solid yellow'
        }
    },
    card1:{
        backgroundImage:`url(${member1})`,
        backgroundSize:'cover',
    },
    card2:{
        backgroundImage:`url(${member2})`,
        backgroundSize:'cover'
    },
    card3:{
        backgroundImage:`url(${member3})`,
        backgroundSize:'cover'
    },
    card4:{
        backgroundImage:`url(${member4})`,
        backgroundSize:'cover'
    },
    card5:{
        backgroundImage:`url(${member5})`,
        backgroundSize:'cover'
    },
    nameDesignation:{
        margin:'1em 1.4em',
        visibility:'hidden',
        // border:'1px solid yellow'
    },
    name:{
        fontFamily:'Sora',
        fontWeight:700,
        fontSize:36,
        color:'#ffffff',
        [theme.breakpoints.down(1071)]: {
            fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            fontSize:20
        },
    },
    designation:{
        fontFamily:'Sora',
        fontWeight:600,
        fontSize:18,
        color:'#ffffff',
        [theme.breakpoints.down(1071)]: {
            fontSize:16
        },
        [theme.breakpoints.down(686)]: {
            fontSize:12
        },
    },

    // Mentor Section
    mentor:{
        width:'98%',
        // height:00,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:'15em',
        // border:'1px solid red',
    },
    card6:{
        backgroundImage:`url(${mentor1})`,
        backgroundSize:'cover'
    },
    card7:{
        backgroundImage:`url(${mentor2})`,
        backgroundSize:'cover'
    },
    card8:{
        backgroundImage:`url(${mentor3})`,
        backgroundSize:'cover'
    },
    card9:{
        backgroundImage:`url(${mentor4})`,
        backgroundSize:'cover'
    },
}))

export default useStyles