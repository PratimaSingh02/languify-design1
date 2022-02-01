import { Swiper, SwiperSlide } from "swiper/react";
import data from '../assets/data'
import SwiperCard from './SwiperCard';
import {  Typography } from '@material-ui/core';
import useStyles from "./styles/Swiperr";
import sphere from '../assets/sphere.svg'
import './styles/Swiperr.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-creative"

// import Swiper core and required modules
import SwiperCore, {
  EffectCreative
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCreative]);

function Swiperr() {
  const classes=useStyles()

  return (
    <div className="swiper-div"> 
      <img src={sphere} className='sphere sphere8'/>
      <Typography className={classes.heading}>Case Studies</Typography>
      <div className='subdiv'>
        <div className='first'></div>
        <div className='second'></div>
            <Swiper direction={'vertical'} loop={true} grabCursor={true} effect={'creative'} creativeEffect={{
                "prev": {
                  "shadow": true,
                  "origin": "top center",
                  "translate": [
                    "-0%",
                    -200,
                    0
                  ],
                },
                "next": {
                  "origin": "bottom center",
                  "translate": [
                    "5%",
                    0,
                    -200
                  ],
                }
              }} className="mySwiper6" className={classes.main}>
                {
                      data.map(item=>{
                        return <SwiperSlide key={item.title} className={classes.card}><SwiperCard item={item}/></SwiperSlide>
                      })
                }
        </Swiper>
      </div>
    </div>
  );
}

export default Swiperr;

