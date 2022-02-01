import React from 'react';
import HomePage1 from '../components/HomePage1';
import HomePage2 from '../components/HomePage2';
import Swiperr from '../components/Swiperr';
import './styles/HomePage.css'

export default function HomePage() {
  return <>
    <HomePage1/>
        <hr className='hr1'/>
    <HomePage2/>
        <hr className='hr2'/>
    <Swiperr/>
  </>;
}
