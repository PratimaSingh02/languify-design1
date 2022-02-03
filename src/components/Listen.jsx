import { Box, Typography } from '@material-ui/core';
import useStyles from './styles/Listen';
import React, { useState ,useEffect} from 'react';
import ListenButton from '../assets/ListenButton.svg'
import analysed from '../assets/analysed.svg'
import exclamation from '../assets/exclamation.svg'

export default function Listen() {
    const classes=useStyles()
    const [listen,setListen]=useState(true)
    const [startProgress,setStartProgress]=useState(false)
    const [endProgress,setEndProgress]=useState(false)

    const progressAnimate=()=>{
        if(startProgress===true){
            let progressDiv=document.querySelector('.progress')
            let elem = document.querySelector(".startProgress");
            let progress=document.querySelector('.progressFill')
            let analyse=document.querySelector('.analyseProgress')
            let data = document.querySelector(".startSpeaking");
            let analysingText = document.querySelector(".analysingText");
            let seconds=document.querySelector(".seconds");
            let analysedImg=document.querySelector(".analysedImg");
            let feedbackDiv=document.querySelector('.feedbackDiv')
            elem.style.width=60
            data.innerHTML="Start speaking in 5"
            data.style.visibility='visible'
            progressDiv.style.marginTop=0
            progress.style.width=0
            seconds.style.display='none'
            analysingText.innerHTML='Analysing'
            analysedImg.style.display='none'
            seconds.style.color='#02569D'
            analyse.style.display='none'
            analysingText.style.display='none'
                let width = 0.10;
                let id=null
                if(window.screen.availWidth>1070)
                    id = setInterval(frame1, 30);
                else if(window.screen.availWidth<=1070)
                    id = setInterval(frame1Laptop, 300);
                else if(window.screen.availWidth<=685)
                    id = setInterval(frame1Tablet, 350);
                else if(window.screen.availWidth<=576)
                    id = setInterval(frame1Mobile, 350);
                
                let counter=4;
                let counterInterval= setInterval(()=>{
                    if(!document.hidden){
                        data.innerHTML=`Start speaking in ${counter}`
                        if(--counter===0)
                            clearInterval(counterInterval)
                    }
                },1000)

                function startSecInterval(){
                    let secCounter=30
                    let secInterval=setInterval(()=>{
                        if(!document.hidden){
                            seconds.innerHTML=`0:${secCounter}`
                            if(--secCounter===-1)
                                clearInterval(secInterval)
                        }
                    },1000)
                }

                function frame1() {
                    if (width >= 15) {//start speaking done, now 30s start
                        clearInterval(id);
                            data.style.visibility='hidden'
                            progress.style.display='block'
                            seconds.style.display='block'
                            startSecInterval()
                            width=1
                            id=setInterval(frame2,300)
                    } else {
                        width=width+0.10;
                        elem.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame1Mobile() {
                    if (width >= 1.2) {//start speaking done, now 30s start
                        clearInterval(id);
                        data.style.visibility='hidden'
                        progress.style.display='block'
                        seconds.style.display='block'
                        startSecInterval()
                        width=1
                        id=setInterval(frame2,300)
                    } else {
                        width=width+0.10;
                        elem.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame1Tablet() {
                    if (width >= 1.2) {//start speaking done, now 30s start
                        clearInterval(id);
                        data.style.visibility='hidden'
                        progress.style.display='block'
                        seconds.style.display='block'
                        startSecInterval()
                        width=1
                        id=setInterval(frame2,300)
                    } else {
                        width=width+0.10;
                        elem.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame1Laptop() {
                    if (width >= 1.4) {//start speaking done, now 30s start
                        clearInterval(id);
                        data.style.visibility='hidden'
                        progress.style.display='block'
                        seconds.style.display='block'
                        startSecInterval()
                        width=1
                        id=setInterval(frame2,300)
                    } else {
                        width=width+0.10;
                        elem.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame2(){
                    if(width>=98)
                        seconds.style.color='#ffffff'
                    if (width >= 100) {//start speaking done, now 30s start
                        clearInterval(id);
                        
                        setTimeout(()=>{
                            seconds.style.display='none'
                            analyse.style.display='block'
                            analysingText.style.display='block'
                            progress.style.display='none'
                            width=0.10
                            if(window.screen.availWidth>1070)
                                id=setInterval(frame3,20)
                            else if(window.screen.availWidth<=1070)
                                id=setInterval(frame3Laptop,300)
                            else if(window.screen.availWidth<=685)
                                id=setInterval(frame3Tablet,350)
                            else if(window.screen.availWidth<=576)
                                id=setInterval(frame3Mobile,350)
                        },2000)                        
                    } else {
                        width++;
                        progress.style.width = width + "%"
                    }//else
                }//frame2()

                function frame3(){
                    if (width >= 15) {//start speaking done, now 30s start
                        clearInterval(id);                 
                        analysingText.innerHTML='Analysed'
                        analysedImg.style.display='block'
                        feedbackDiv.classList.add('w3-animate-bottom')
                        setEndProgress(true)
                        progressDiv.style.marginTop='100px'
                    } else {
                        width=width+0.10;
                        analyse.style.transform = `scaleX(${width})`
                    }//else
                }//frame3()
            
                function frame3Mobile() {
                    if (width >= 1.2) {//start speaking done, now 30s start
                        clearInterval(id);
                        analysingText.innerHTML='Analysed'
                        analysedImg.style.display='block'
                        setEndProgress(true)
                        progressDiv.style.marginTop='100px'
                    } else {
                        width=width+0.10;
                        analyse.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame3Tablet() {
                    if (width >= 1.4) {//start speaking done, now 30s start
                        clearInterval(id);
                        analysingText.innerHTML='Analysed'
                        analysedImg.style.display='block'
                        setEndProgress(true)
                        progressDiv.style.marginTop='100px'
                    } else {
                        width=width+0.10;
                        analyse.style.transform = `scaleX(${width})`
                    }//else
                }//frame1

                function frame3Laptop() {
                    if (width >= 1.2) {//start speaking done, now 30s start
                        clearInterval(id);
                        analysingText.innerHTML='Analysed'
                        analysedImg.style.display='block'
                        setEndProgress(true)
                        progressDiv.style.marginTop='100px'
                    } else {
                        width=width+0.10;
                        analyse.style.transform = `scaleX(${width})`
                    }//else
                }//frame1
                
        }
    }

    const handleProgress=()=>{
        setListen(false)
        setStartProgress(true)
    }

   const tryAgain=()=>{ 
       setListen(true)
       setStartProgress(false)
       setEndProgress(false)
   }

    useEffect(()=>{//use effect is used becuase it is called only after component is fully mounted .. so to query DOM elements we need useEffect
        //will be called only once, startProgress is set to true
        console.log('use effect called');
        progressAnimate()
    },[startProgress])

    return <Box className={`${classes.container} w3-animate-bottom`}>
      {!endProgress && <Box className={classes.exclamationDiv}>
                <img src={exclamation} alt='Note' style={{marginRight:'1em'}}/>
                <Typography className={classes.exclamationText}>Speak aloud in English after pressing the listen button. The listening button will listen to your audio for 30 secs and provide you the feedback</Typography>
          </Box>}
      <Box className={classes.section1}>
          {listen && <img className={classes.listenBtn} src={ListenButton} onClick={handleProgress} alt='Listen'/>}
         
          {startProgress && <div className={`${classes.progress} progress`}>
              <span className={`${classes.startSpeaking} startSpeaking`}>Start speaking in 5</span>
              <span className={`${classes.analysingText} analysingText`}>Analysing</span>
              <span className={`${classes.seconds} seconds`}></span> 
              <img src={analysed} alt='Done' className={`${classes.analysedImg} analysedImg`}/>
              <div className={`${classes.startProgress} startProgress`}></div>
              <div className={`${classes.progressFill} progressFill`}></div>
              <div className={`${classes.analyseProgress} analyseProgress`}></div>

          </div>}
      </Box>
      <Box className={`${classes.section2} feedbackDiv`}>
          {!endProgress && <Typography className={classes.demoText}>You can also read the following paragraph or talk about anything</Typography>}
          {endProgress && <Typography className={classes.feedbackTitle}>Speaking Feedback</Typography>}
          {endProgress && <Box className={classes.flexbox}>
              <Box className={classes.flexItem}>
                  <Typography className={classes.flexTitle}>Accuracy</Typography>
                  <Typography className={classes.score}>95</Typography>
                  <div className={`${classes.flexProgress} ${classes.flexProgress1}`}>
                      <div className={`${classes.flexProgressFill} ${classes.flexProgressFill1}`}></div>
                  </div>
              </Box>
              <Box className={classes.flexItem}>
                  <Typography className={classes.flexTitle}>Delivery</Typography>
                  <Typography className={classes.score}>40</Typography>
                  <div className={`${classes.flexProgress} ${classes.flexProgress2}`}>
                      <div className={`${classes.flexProgressFill} ${classes.flexProgressFill2}`}></div>
                  </div>
              </Box>
              <Box className={classes.flexItem}>
                  <Typography className={classes.flexTitle}>Vocabulary</Typography>
                  <Typography className={classes.score}>65</Typography>
                  <div className={`${classes.flexProgress} ${classes.flexProgress3}`}>
                      <div className={`${classes.flexProgressFill} ${classes.flexProgressFill3}`}></div>
                  </div>
              </Box>
              <Box className={classes.flexItem}>
                  <Typography className={classes.flexTitle}>Engagement</Typography>
                  <Typography className={classes.score}>85</Typography>
                  <div className={`${classes.flexProgress} ${classes.flexProgress4}`}>
                      <div className={`${classes.flexProgressFill} ${classes.flexProgressFill4}`}></div>
                  </div>
              </Box>
          </Box>}
          <Box className={classes.demoPara}>
              {!endProgress && <Typography className={classes.demoParaHeading}>Sample paragraph for reading</Typography>}
              <Typography className={classes.demoParaText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper in in dolor pellentesque imperdiet. Quam est, at vulputate sed arcu elementum nisl cursus. Bibendum in varius malesuada commodo ac, iaculis blandit eget.</Typography>
              </Box>
          {endProgress && <button type='submit' className={classes.tryBtn} onClick={tryAgain}>Try Again</button>}
      </Box>
  </Box>;
}
