import { Container, makeStyles } from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // border:'1px solid red',
    },
    exclamationDiv:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#F2FAFF',
        padding:'1em',
        marginBottom:'1em',
        width:700,
        height:100,
        [theme.breakpoints.down(1071)]: {
            width:600,
        },
        [theme.breakpoints.down(686)]: {
            width:520,
        },
        [theme.breakpoints.down(577)]: {
            width:280
        },
    },

    exclamationText:{
        color:'#02569D',
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:18,
        textAlign:'left',
        [theme.breakpoints.down(1071)]: {
            fontSize:16
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:12
        },
        [theme.breakpoints.down(577)]: {
            fontSize:13
        },
    },

    //section1
    section1:{
        position:'relative',
        display:'flex',
        marginBottom:'1em',
        // border:'1px solid red'
    },
    listenBtn:{
        cursor:'pointer',
        [theme.breakpoints.down(577)]: {
            width:40
        },
    },
    progress:{
        position:'relative',
        backgroundColor:'#ffffff',
        width:796,
        height:60,
        borderRadius:184,
        overflow:'hidden',
        [theme.breakpoints.down(1071)]: {
            width:600,
        },
        [theme.breakpoints.down(686)]: {
            width:520,
        },
        [theme.breakpoints.down(577)]: {
            width:280
        },
    },
    startProgress:{
        position:'absolute',
        top:0,
        left:360,
        width:60,
        height:60,
        backgroundColor:'#F2FAFF',
        [theme.breakpoints.down(1071)]: {
            width:600,
            left:10
        },
        [theme.breakpoints.down(686)]: {
            width:520,
            left:10
        },
        [theme.breakpoints.down(577)]: {
            width:280,
            left:0
        },
    },
    progressFill:{
        position:'absolute',
        left:0,
        top:0,
        width:0,
        height:60,
        backgroundColor:'#02569D',
        borderRadius:184,
        // display:'none',
        transition:'width 2s',
    },
    analyseProgress:{
        position:'absolute',
        top:0,
        left:360,
        width:60,
        height:60,
        backgroundColor:'#C5FAE3',
        display:'none',
        [theme.breakpoints.down(1071)]: {
            width:600,
            left:10
        },
        [theme.breakpoints.down(686)]: {
            width:520,
            left:10
        },
        [theme.breakpoints.down(577)]: {
            width:280,
            left:0
        },
    },
    startSpeaking:{
        position:'absolute',
        top:'50%',
        transform: 'translate(-50%,-50%)',
        zIndex:1,
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:24,
        color:'#02569D',
        [theme.breakpoints.down(1071)]: {
            fontSize:20
        },
        [theme.breakpoints.down(686)]: {
            fontSize:18
        },
        [theme.breakpoints.down(577)]: {
            fontSize:15
        },
    },
    analysingText:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        zIndex:1,
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:24,
        color:'#35E9A8',
        display:'none',
        [theme.breakpoints.down(1071)]: {
            fontSize:20
        },
        [theme.breakpoints.down(686)]: {
            fontSize:18
        },
        [theme.breakpoints.down(577)]: {
            fontSize:15
        },
    },
    
    seconds:{
        position:'absolute',
        top:'50%',
        transform: 'translateY(-50%)',
        right:0,
        zIndex:1,
        marginRight:'1em',
        fontFamily:'Open Sans',
        fontWeight:600,
        fontSize:14,
        color:'#02569D',
        display:'none'
    },
    analysedImg:{
        position:'absolute',
        top:'50%',
        transform: 'translateY(-50%)',
        right:0,
        zIndex:1,
        marginRight:'1em',
        display:'none',
        [theme.breakpoints.down(1071)]: {
            width:30
        },
        [theme.breakpoints.down(686)]: {
            fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:18
        },
    },

    // section2  
    section2:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:'2em'
    },
    demoText:{
        color:'#858C90',
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:18,
        marginBottom:'1em',
        [theme.breakpoints.down(1071)]: {
            fontSize:16
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:12
        },
        [theme.breakpoints.down(577)]: {
            fontSize:13
        },
    },
    feedbackTitle:{
        fontFamily:'Open Sans',
        fontWeight:700,
        fontSize:30,
        margin:'1em 0',
        [theme.breakpoints.down(1071)]: {
            fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            fontSize:24
        },
        [theme.breakpoints.down(577)]: {
            fontSize:20
        },
    },
    flexbox:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        width:600,
        marginBottom:'2em',
        // border:'1px solid black',
        [theme.breakpoints.down(1071)]: {
            width:600,
        },
        [theme.breakpoints.down(686)]: {
            width:520,
        },
        [theme.breakpoints.down(577)]: {
            width:280
        },
    },
    flexItem:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'1em',
        // border:'1px solid black',
        [theme.breakpoints.down(577)]: {
            margin:'0.2em'
        },
    },
    flexTitle:{
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:16,
        [theme.breakpoints.down(577)]: {
            fontSize:12
        },
    },
    score:{
        fontFamily:'Sora',
        fontWeight:700,
        fontSize:64,
        [theme.breakpoints.down(1071)]: {
            fontSize:54
        },
        [theme.breakpoints.down(686)]: {
            fontSize:40
        },
        [theme.breakpoints.down(577)]: {
            fontSize:24
        },
    },
    flexProgress:{
        width:80,
        height:16,
        borderRadius:12,
        [theme.breakpoints.down(1071)]: {
            fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:40,
            height:10,
        },
    },
    flexProgressFill:{
        height:16,
        borderRadius:12,
        [theme.breakpoints.down(1071)]: {
            // fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            height:10,
        },
    },
    flexProgress1:{
        backgroundColor:'#E5F9F4'
    },
    flexProgress2:{
        backgroundColor:'#F9E7E7'
    },
    flexProgress3:{
        backgroundColor:'#FBF1D6'
    },
    flexProgress4:{
        backgroundColor:'#E5F9F4'
    },
    flexProgressFill1:{
        width:42,
        backgroundColor:'#4BE1BD',
        [theme.breakpoints.down(1071)]: {
            // fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:22
        },
    },
    flexProgressFill2:{
        width:50,
        backgroundColor:'#EA6E6E',
        [theme.breakpoints.down(1071)]: {
            // fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:30
        },
    },
    flexProgressFill3:{
        width:52,
        backgroundColor:'#E1B74B',
        [theme.breakpoints.down(1071)]: {
            // fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:32
        },
    },
    flexProgressFill4:{
        width:42,
        backgroundColor:'#4BE1BD',
        [theme.breakpoints.down(1071)]: {
            // fontSize:26
        },
        [theme.breakpoints.down(686)]: {
            // fontSize:22
        },
        [theme.breakpoints.down(577)]: {
            width:22
        },
    },
    
    demoPara:{
        width:716,
        // display:'flex',
        // flexDirection:'column',
        // alignItems:'flex-start',
        textAlign:'left',
        backgroundColor:'#F4F5F5',
        padding:'1em',
        fontFamily:'Open Sans',
        borderRadius:8,
        marginBottom:'1em',
        [theme.breakpoints.down(1071)]: {
            width:600,
        },
        [theme.breakpoints.down(686)]: {
            width:520,
        },
        [theme.breakpoints.down(577)]: {
            width:280,
        },
    },

    demoParaHeading:{
        color:'#000000',
        fontWeight:700,
        fontSize:18,
        [theme.breakpoints.down(1071)]: {
            fontSize:16
        },
        [theme.breakpoints.down(577)]: {
            fontSize:13
        },
    },
    demoParaText:{
        color:'#2C3840',
        fontWeight:400,
        fontSize:24,
        [theme.breakpoints.down(1071)]: {
            fontSize:20
        },
        [theme.breakpoints.down(686)]: {
            fontSize:16
        },
        [theme.breakpoints.down(577)]: {
            fontSize:13
        },
    },

    tryBtn:{
        width:160,
        height:60,
        border:"none",
        borderRadius:60,
        backgroundColor:'#02569D',
        textTransform:'capitalize',
        cursor: 'pointer',
        color:'#ffffff',
        fontFamily:'Open Sans',
        fontSize:18,      
        marginBottom:'1em',
        '&:hover':{
            backgroundColor:'#7EB4D9'
        },
        [theme.breakpoints.down(1071)]: {
            width:140,
            height:50,
            fontSize:15
        },
        [theme.breakpoints.down(686)]: {
            width:120,
            height:40,
            fontSize:12
        },
    },
}))

export default useStyles