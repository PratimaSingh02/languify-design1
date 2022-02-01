import {  makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    section1:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end'
    },
    para:{
        fontFamily:'Open Sans',
        fontSize:16,
        color:'#9BA1A5',
        marginTop:'1em',
        marginRight:20,
        [theme.breakpoints.down(1071)]: {
            fontSize:12,
            margin:0
        },
        [theme.breakpoints.down(685)]: {
            fontSize:12,
            margin:0
        },
    }
}))

export default useStyles