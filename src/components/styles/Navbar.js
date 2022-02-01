import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    navbar:{
        position: 'fixed',
        width: '100%',
        height: 112,
        left: '0px',
        top: '0px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        zIndex:2,
        padding:'0 7em',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        [theme.breakpoints.down(1071)]: {
            padding:'0 2em'
        },
        [theme.breakpoints.down(685)]: {
            padding:'0 1em'
        },
        [theme.breakpoints.down(577)]: {
            height:90
        },
    },
    section2:{
        width:464,
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down(1071)]: {
            width:430,
            justifyContent:'space-around',
            // border:'1px solid red'
        },
        [theme.breakpoints.down(685)]: {
            width:300,
            justifyContent:'space-around',
            // border:'1px solid red'
        },
        [theme.breakpoints.down(577)]: {
            display:'none'
        },
    },
    products:{
        fontFamily:'Open Sans',
        fontSize:18,
        fontWeight:700,
        textTransform:'capitalize',
        color:'#02569D',
        marginRight:'1em',
        [theme.breakpoints.down(1071)]: {
            fontSize:17,
            marginRight:'0.5em'
        },
        [theme.breakpoints.down(685)]: {
            fontSize:14,
            marginRight:'0.3em'
        },
    },
    sidebar1:{
        border:'1px solid white',
        width:'100%',
    },
    sidebar2:{
        // border:'1px solid red',
        width:'100%',
        marginBottom:10
    },
    para:{
        fontFamily:'Open Sans',
        fontSize:16,
        color:'#9BA1A5',
        marginLeft:55
    },
    menu:{
        marginTop:60,
        marginLeft:-30,
        '& ul':{
            width:150,
            margin:0,
            padding:0
        }
    },
    menuItem:{
        width:'100%',
        margin:'1em 0',
        // border:'1px solid red',
        display:'flex',
        justifyContent:'center',
        fontFamily:'Open Sans',
        fontSize:18,
        fontWeight:700,
        color:'#02569D',
    }
}))

export default useStyles