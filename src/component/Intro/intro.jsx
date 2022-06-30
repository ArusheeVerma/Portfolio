//import React from 'react'
import'./intro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {init} from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef= useRef();
  useEffect(() => {
    //console.log(textRef);
  
    // return () => { 
    // }
    init(textRef.current, {
      showcursor:true,
      backDelay: 1500,
      backSpeed:60,
      strings:[" Full Stack Web Developer", " Software Developer"," Sophomore"],

    });
  }, [])
  

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/photo2.jpeg"></img>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Arushee Verma</h1>
          <h3>Enthusiastic<span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
        <KeyboardArrowDownIcon className='icon'/>
        </a>
      </div>

    </div>
  )
}
